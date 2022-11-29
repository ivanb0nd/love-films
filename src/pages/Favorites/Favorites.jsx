import React, { useContext } from 'react';
import FavoritesMovies from '../../components/FavoritesMovies/FavoritesMovies';
import { FavoritesContext } from "../../providers/FavoritesProvider/FavoritesProvider";
import classes from './Favorites.module.css';

const Favorites = () => {
	const { favorites, setFavorites } = useContext(FavoritesContext)
	console.log(favorites)
	return (
		<main className={classes.favorites}>
			<h1 className={classes.title}>⭐ Избранное</h1>
			<FavoritesMovies favorites={favorites} setFavorites={setFavorites} />
		</main>
	)
}

export default Favorites