import React from 'react'
import MovieItem from '../UI/MovieItem/MovieItem'
import classes from './Movies.module.css'

const Movies = ({ movies }) => {
	// console.log(movies)
	return (
		<div className={classes.movies}>
			{
				movies.map(movie => {
					return <MovieItem key={movie.kinopoiskId} movie={movie} />
				})
			}
		</div>
	)
}

export default Movies

