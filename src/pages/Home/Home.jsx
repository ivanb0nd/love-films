import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import CustomInput from '../../components/UI/Input/CustomInput'
import Loader from '../../components/UI/Loader/Loader'
import { useFetching } from '../../hooks/useFetching'
import classes from './Home.module.css'
import movieAPI from '../../API/MovieAPI'
import Movies from '../../components/Movies/Movies'

const Home = () => {
	const [movies, setMovies] = useState([]);

	const [fetchMovies, isMovieLoading, movieError] = useFetching(async () => {
		const response = await movieAPI.getMoviesByGenre(1, 1, 'ALL')
		setMovies(response.items)
	})

	useEffect(() => {
		fetchMovies();
	}, [])

	console.log(movies)
	return (
		<div className={classes.home}>
			<div className={classes.searchInput}>
				<CustomInput placeholder="Поиск любого фильма или сериала" />
			</div>
			<div className={classes.sidebar}>
				<Sidebar />
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