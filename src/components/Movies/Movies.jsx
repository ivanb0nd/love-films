import React from 'react'
import MovieCard from '../UI/MovieCard/MovieCard'
import classes from './Movies.module.css'

const Movies = ({ movies }) => {

	if (!movies.length) {
		return (
			<div className={classes.notFound}>
				<h1>
					Фильмов не найдено
					<br />
					<div>:(</div>
				</h1>
			</div>
		)
	}

	return (
		<div className={classes.movies}>
			<ul className={classes.moviesList}>
				{
					movies.map(movie => {
						return <li key={movie.kinopoiskId}>
							<MovieCard movie={movie} />
						</li>
					})
				}
			</ul>
		</div>
	)
}

export default Movies

