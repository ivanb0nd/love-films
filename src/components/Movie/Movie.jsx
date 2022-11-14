import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import movieAPI from '../../API/MovieAPI'
import { useFavorite } from '../../hooks/useFavorite'
import { useFetching } from '../../hooks/useFetching'
import { FavoritesContext } from '../../providers/FavoritesProvider/FavoritesProvider'
import { movieIsFavorite } from '../../utils/movieIsFavorite'
import HeartIcon from '../icons/HeartIcon'
import Loader from '../UI/Loader/Loader'
import MovieFootage from '../UI/MovieFootage/MovieFootage'
import MovieInfo from '../UI/MovieInfo/MovieInfo'
import classes from './Movie.module.css'

const Movie = () => {
	const { favorites, setFavorites } = useContext(FavoritesContext)
	const { movieId } = useParams()
	const [footage, setFootage] = useState([])
	const [movieInfo, setMovieInfo] = useState({})
	const navigate = useNavigate()
	const toggleFavorite = useFavorite(favorites, setFavorites)

	const [fetchingMovie, isMovieLoading, movieError] = useFetching(async (movieId) => {
		const response = await movieAPI.getMovieById(movieId)
		setMovieInfo(response)
	})
	const [fetchingFootage, isFootageLoading, footageError] = useFetching(async (movieId) => {
		const response = await movieAPI.getStaffInfoById(movieId)
		setFootage(response.items)
	})

	useEffect(() => {
		fetchingFootage(movieId)
		fetchingMovie(movieId)
	}, [])

	if (movieError) return (
		<main className={classes.error}>
			<h1>
				Мы не можем найти такой фильм
			</h1>
			<button className={classes.errorButton} onClick={() => navigate(-1)}>Назад</button>
		</main>
	)

	return (
		<main className={classes.movie}>
			{isMovieLoading
				? <div className={classes.loaderWrapper}><Loader /></div>
				: <>
					<div className={classes.control}>
						<button onClick={() => navigate(-1)} className={classes.back}><span className={`${classes.arrow} ${classes.left}`}></span></button>
						<button onClick={() => toggleFavorite(movieInfo)} className={movieIsFavorite(favorites, movieInfo) ? `${classes.favorite} ${classes.added}` : classes.favorite}>
							<HeartIcon className={classes.favoriteIcon} />
						</button>
					</div>

					<MovieInfo movieInfo={movieInfo} />

					<hr className={classes.divider} />

					{isFootageLoading
						? <div className={classes.loader}><Loader /></div>
						: <MovieFootage footageData={footage} />
					}
				</>
			}
		</main>
	)
}

export default Movie

