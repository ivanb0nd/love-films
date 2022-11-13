import React from 'react'
import PopularMovieCard from '../UI/PopularMovieCard/PopularMovieCard'
import classes from './PopularMovies.module.css'

const PopularMovies = ({ movies }) => {
	return (
		<div className={classes.movies}>
			<ul className={classes.moviesList}>
				{
					movies.map(movie => {
						return <li key={movie.filmId}>
							<PopularMovieCard movie={movie} />
						</li>
					})
				}
			</ul>
		</div>
	)
}

export default PopularMovies