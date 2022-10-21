import React from 'react'
import MovieItem from '../UI/MovieItem/MovieCard'
import classes from './Movies.module.css'

const Movies = ({ movies }) => {

	return (
		<div className={classes.moviesList}>
			<ul className={classes.movies}>
				{
					movies.map(movie => {
						return <li key={movie.kinopoiskId}>
							<MovieItem movie={movie} />
						</li>
					})
				}
			</ul>
		</div>
	)
}

export default Movies

