import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import CustomInput from '../../components/UI/Input/CustomInput'
import Loader from '../../components/UI/Loader/Loader'
import { useFetching } from '../../hooks/useFetching'
import classes from './Home.module.css'
import movieAPI from '../../API/MovieAPI'
import Movies from '../../components/Movies/Movies'

const Home = () => {
	const [movies, setMovies] = useState([])
	const [genre, setGenre] = useState(1)
	const [page, setPage] = useState(1)
	const [movieType, setMovieType] = useState('ALL')

	const [fetchMovies, isMovieLoading, movieError] = useFetching(async (genre, page, movieType) => {
		const response = await movieAPI.getMoviesByGenre(genre, page, movieType)
		console.log(response)
		setMovies(response.items)
	})

	function changeGenre(genre) {
		setPage(1)
		setGenre(genre)
	}

	useEffect(() => {
		fetchMovies(genre, page, movieType)
	}, [genre])

	return (
		<div className={classes.home}>
			<div className={classes.searchInput}>
				<CustomInput placeholder="Поиск любого фильма или сериала" />
			</div>
			<div className={classes.sidebar}>
				<Sidebar genre={genre} changeGenre={changeGenre} />
			</div>
			<main className={classes.main}>
				{
					movieError && <h1>Error {movieError}</h1>
				}
				{isMovieLoading
					? <div className={classes.loaderWrapper}><Loader /></div>
					: <Movies movies={movies} />
				}
			</main>
		</div>
	)
}

export default Home