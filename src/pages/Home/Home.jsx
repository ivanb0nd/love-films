import React, { useEffect, useState } from 'react'
import movieAPI from '../../API/MovieAPI'
import Movies from '../../components/Movies/Movies'
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchButton from '../../components/UI/Buttons/SearchButton/SearchButton'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import CustomInput from '../../components/UI/Input/CustomInput'
import Loader from '../../components/UI/Loader/Loader'
import Pagination from '../../components/UI/Pagination/Pagination'
import RadioButtons from '../../components/UI/RadioButtons/RadioButtons'
import { useFetching } from '../../hooks/useFetching'
import classes from './Home.module.css'

const Home = () => {
	const [movies, setMovies] = useState([])
	const [totalPages, setTotalPages] = useState(1)
	const [formingKeyword, setFormingKeyword] = useState('');
	const [searchParams, setSearchParams] = useState({ page: 1, genre: 3, movieType: 'ALL', keyword: '', order: 'NUM_VOTE' })

	const [fetchMovies, isMoviesLoading, moviesError] = useFetching(async (genre, page, movieType, keyword, order) => {
		const response = await movieAPI.getMoviesByGenre(genre, page, movieType, keyword, order)
		setTotalPages(response.totalPages)
		setMovies(response.items)
	})

	const changePage = (pageNumber) => {
		setSearchParams({ ...searchParams, page: pageNumber })
	}

	const changeGenre = (genreId) => {
		setSearchParams({ ...searchParams, genre: genreId })
	}

	const changeMoviesType = (moviesType) => {
		setSearchParams({ ...searchParams, movieType: moviesType })
	}

	const changeSortingOrder = (orderType) => {
		setSearchParams({ ...searchParams, order: orderType })
	}

	useEffect(() => {
		fetchMovies(searchParams.genre, searchParams.page, searchParams.movieType, searchParams.keyword, searchParams.order)
	}, [searchParams.genre, searchParams.page, searchParams.movieType, searchParams.keyword, searchParams.order])

	function searchByKeyword(event) {
		event.preventDefault()
		setMovies([])
		setTotalPages(1)
		setSearchParams({ ...searchParams, keyword: formingKeyword, page: 1 })
	}

	return (
		<div className={classes.home}>
			<form onSubmit={searchByKeyword} className={classes.searchForm}>
				<CustomInput
					value={formingKeyword}
					onChange={(event) => setFormingKeyword(event.target.value)}
					placeholder="Поиск любого фильма или сериала"
				/>
				<SearchButton />
			</form>
			<div className={classes.sidebar}>
				<Sidebar genre={searchParams.genre} changeGenre={changeGenre} />
			</div>
			<main className={classes.main}>
				<div className={classes.sortingFilters}>
					<RadioButtons
						canChange={isMoviesLoading}
						moviesType={searchParams.movieType}
						name={'moviesType'}
						changeMoviesType={changeMoviesType}
						buttons={[
							{ value: 'ALL', text: 'Все' },
							{ value: 'FILM', text: 'Фильмы' },
							{ value: 'TV_SERIES', text: 'Сериалы' }
						]}
					/>
					<CustomSelect
						value={searchParams.order}
						onChange={changeSortingOrder}
						defaultValue={'Сортировать по'}
						options={[
							{ value: 'RATING', name: 'Рейтингу' },
							{ value: 'NUM_VOTE', name: 'Количеству голосов' },
							{ value: 'YEAR', name: 'Году' }
						]}
					/>
				</div>
				{
					moviesError && <h1>Error {moviesError}</h1>
				}
				{isMoviesLoading
					? <div className={classes.loaderWrapper}><Loader /></div>
					: <Movies movies={movies} />
				}
				<Pagination
					totalPage={totalPages}
					page={searchParams.page}
					changePage={changePage}
					canLoad={isMoviesLoading}
				/>
			</main>
		</div>
	)
}

export default Home