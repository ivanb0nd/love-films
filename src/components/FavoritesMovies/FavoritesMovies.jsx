import React from 'react'
import FavoriteMovieCard from '../UI/FavoriteMovieCard/FavoriteMovieCard'
import classes from './FavoritesMovies.module.css'

const FavoritesMovies = ({ favorites, setFavorites }) => {
	console.log(favorites)
	if (!favorites.length) {
		return (
			<div className={classes.empty}>
				<h1>Список избранного пуст</h1>
			</div>
		)
	}

	return (
		<div className={classes.container}>
			<ul className={classes.favoritesList}>
				{favorites.map(movie => <li key={movie.id}>
					<FavoriteMovieCard
						movie={movie}
						favorites={favorites}
						setFavorites={setFavorites}
					/>
				</li>)}
			</ul>
		</div>
	)
}

export default FavoritesMovies