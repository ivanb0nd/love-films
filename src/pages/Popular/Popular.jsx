import React, { useEffect, useRef, useState } from 'react'
import movieAPI from '../../API/MovieAPI'
import PopularMovies from '../../components/PopularMovies/PopularMovies'
import Loader from '../../components/UI/Loader/Loader'
import { useFetching } from '../../hooks/useFetching'
import { useInfiniteLoading } from '../../hooks/useInfiniteLoading'
import classes from './Popular.module.css'

const Popular = () => {
	const [movies, setMovies] = useState([])
	const [totalPages, setTotalPages] = useState(1)
	const [page, setPage] = useState(1)
	const infiniteLoadingContainer = useRef()

	const [fetchMovies, isMoviesLoading, movieError] = useFetching(async (page) => {
		const response = await movieAPI.getPopularMovies(page)
		setMovies([...movies, ...response.films])
		setTotalPages(response.pagesCount)
	})

	useEffect(() => {
		fetchMovies(page)
	}, [page])

	useInfiniteLoading(infiniteLoadingContainer, page < totalPages, isMoviesLoading, () => setPage(page + 1))

	return (
		<main className={classes.popular}>
			<h1 className={classes.title}>🔥 100 популярных фильмов</h1>
			<PopularMovies movies={movies} />
			<div ref={infiniteLoadingContainer}></div>
			{isMoviesLoading && <div className={classes.loaderWrapper}>
				<Loader />
			</div>}
		</main>
	)
}

export default Popular