import React from 'react'
import { Link } from 'react-router-dom'
import HeartIcon from '../../icons/HeartIcon'
import StarIcon from '../../icons/StarIcon'
import classes from './PopularMovieCard.module.css'

const PopularMovieCard = ({ movie }) => {

	return (
		<div className={classes.movie}>
			<Link className={classes.item} to={`/movie/${movie.filmId}`}>
				<div className={classes.poster}>
					<img src={movie.posterUrlPreview} alt={movie.type === 'TV_SERIES' ? `Постер сериала ${movie.nameRu}` : `Постер фильма ${movie.nameRu}`} />
					<button className={classes.favoritesButton}><HeartIcon className={classes.favoritesButtonIcon} /></button>
				</div>
			</Link>
			<div className={classes.info}>
				<h1 className={classes.title}>{movie.nameRu}</h1>
				<div className={classes.rating}>
					<StarIcon className={classes.ratingIcon} />
					<span>{movie.rating ? movie.rating : 'без рейтинга'}</span>
				</div>
			</div>
		</div>

	)
}

export default PopularMovieCard