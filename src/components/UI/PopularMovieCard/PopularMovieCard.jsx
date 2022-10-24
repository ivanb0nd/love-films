import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PopularMovieCard.module.css'
import StarIcon from '../../icons/StarIcon'
import HeartIcon from '../../icons/HeartIcon'

const PopularMovieCard = ({ movie }) => {
	return (
		<Link className={classes.item} to={'/asdf'}>
			<div className={classes.movie}>
				<div className={classes.poster}>
					<img src={movie.posterUrlPreview} alt={movie.type === 'TV_SERIES' ? `Постер сериала ${movie.nameRu}` : `Постер фильма ${movie.nameRu}`} />
					<button className={classes.favoritesButton}><HeartIcon className={classes.favoritesButtonIcon} /></button>
				</div>
				<div className={classes.info}>
					<h1 className={classes.title}>{movie.nameRu}</h1>
					<div className={classes.rating}>
						<StarIcon className={classes.ratingIcon} />
						<span>{movie.rating}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default PopularMovieCard