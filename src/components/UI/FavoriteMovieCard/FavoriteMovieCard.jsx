import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorite } from '../../../hooks/useFavorite'
import StarIcon from '../../icons/StarIcon'
import classes from './FavoriteMovieCard.module.css'

const FavoriteMovieCard = ({ movie, favorites, setFavorites }) => {
	const toggleFavorite = useFavorite(favorites, setFavorites)

	return (
		<div className={classes.item}>
			<div className={classes.movie}>
				<div className={classes.poster}>
					<Link to={`/movie/${movie.kinopoiskId}`}>
						<img src={movie.posterUrlPreview} alt={movie.type === 'TV_SERIES' ? `Постер сериала ${movie.nameRu}` : `Постер фильма ${movie.nameRu}`} />
					</Link>
					<button onClick={() => toggleFavorite(movie)} className={classes.deleteButton}></button>
				</div>
				<div className={classes.info}>
					<h1 className={classes.title}>
						{movie.nameRu ? movie.nameRu : movie.nameOriginal}
					</h1>
					<div className={classes.rating}>
						<StarIcon className={classes.ratingIcon} />
						<span>
							{movie.ratingKinopoisk ? movie.ratingKinopoisk : movie.rating ? movie.rating : movie.ratingImdb ? movie.ratingImdb : 'без рейтинга'}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FavoriteMovieCard