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

/**
 {
		"filmId": 4642708,
		"nameRu": "Нулевой пациент",
		"nameEn": null,
		"year": "2022",
		"filmLength": null,
		"countries": [
				{
						"country": "Россия"
				}
		],
		"genres": [
				{
						"genre": "драма"
				},
				{
						"genre": "детектив"
				}
		],
		"rating": "8.4",
		"ratingVoteCount": 183440,
		"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4642708.jpg",
		"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4642708.jpg",
		"ratingChange": null
} 
  
 */