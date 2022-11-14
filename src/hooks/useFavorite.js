import { convertMovieToObject } from "../utils/convertMovieToObject"

export const useFavorite = (favorites, setFavorites) => {
	const toggleFavorite = (newMovie) => {
		console.log(newMovie)
		const convertedMovie = convertMovieToObject(newMovie)
		console.log(convertedMovie)
		if (favorites.some(favorite => favorite.id === convertedMovie.id)) {
			const filteredFavorites = favorites.filter(favorite => favorite.id !== convertedMovie.id)
			setFavorites(filteredFavorites)
		} else {
			setFavorites([...favorites, convertedMovie])
		}
	}
	return toggleFavorite
}