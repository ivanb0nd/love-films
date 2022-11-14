import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useFavorite } from '../../../hooks/useFavorite'
import { FavoritesContext } from '../../../providers/FavoritesProvider/FavoritesProvider'
import { movieIsFavorite } from '../../../utils/movieIsFavorite'
import HeartIcon from '../../icons/HeartIcon'
import StarIcon from '../../icons/StarIcon'
import classes from './PopularMovieCard.module.css'

const PopularMovieCard = ({ movie }) => {
	const { favorites, setFavorites } = useContext(FavoritesContext)
	const toggleFavorite = useFavorite(favorites, setFavorites)

	return (
		<div className={classes.movie}>
			<div className={classes.poster}>
				<Link className={classes.item} to={`/movie/${movie.filmId}`}>
					<img src={movie.posterUrlPreview} alt={movie.type === 'TV_SERIES' ? `Постер сериала ${movie.nameRu}` : `Постер фильма ${movie.nameRu}`} />
				</Link>
				<button onClick={() => toggleFavorite(movie)} className={movieIsFavorite(favorites, movie) ? `${classes.favoritesButton} ${classes.added}` : classes.favoritesButton}><HeartIcon className={classes.favoritesButtonIcon} /></button>
			</div>
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