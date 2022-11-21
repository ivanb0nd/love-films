import React from 'react'
import { convertMovieDurationTime } from '../../../utils/convertMovieDurationTime'
import { getRatingAge } from '../../../utils/getRatingAge'
import StarIcon from '../../icons/StarIcon'
import Loader from '../Loader/Loader'
import classes from './MovieInfo.module.css'

const MovieInfo = ({ movieInfo }) => {
	if (Object.keys(movieInfo).length === 0) return <Loader />

	return (
		<div className={classes.container}>
			<div className={classes.left}>
				<div className={classes.poster}>
					<picture>
						<source srcSet={movieInfo.coverUrl} media="(max-width: 1200px)" />
						<img src={movieInfo.posterUrlPreview} alt="Постер фильма" />
					</picture>
				</div>
			</div>
			<div className={classes.movieInfo}>
				<div className={classes.titleSection}>
					<h1 className={classes.title}>{movieInfo.nameRu}
						{movieInfo.ratingAgeLimits && <span className={classes.ageLimit}>{`${getRatingAge(movieInfo.ratingAgeLimits)}+`}</span>}
					</h1>
					<span className={classes.movieType}>
						{movieInfo.type.toLowerCase() === 'film' ? 'фильм' : 'сериал'}
					</span>
				</div>
				<ul className={classes.promoDescription}>
					<li>{movieInfo.year}</li>
					<li className={classes.genres}>{movieInfo.genres.map(({ genre }) => genre).join(', ')}</li>
					<li className={classes.countries}>{movieInfo.countries.map(({ country }) => country).join(', ')}</li>
					<li>{movieInfo.filmLength && `${movieInfo.filmLength}мин. / ${convertMovieDurationTime(movieInfo.filmLength)}`} </li>
				</ul>
				<p className={classes.description}>{movieInfo.description}</p>
				<a className={classes.kinopoiskLink} target='_blank' rel='noreferrer' href={movieInfo.webUrl}>Перейти на кинопоиск</a>
				<div className={classes.rating}>
					<span>
						{movieInfo.ratingKinopoisk ? movieInfo.ratingKinopoisk : 'без рейтинга'}
					</span>
					<StarIcon className={classes.ratingIcon} />
				</div>
			</div>
		</div>
	)
}

export default MovieInfo