import { convertMovieToObject } from "./convertMovieToObject"

export const movieIsFavorite = (favorites, movie) => {
	return favorites.some(favoriteMovie => favoriteMovie.id === convertMovieToObject(movie).id)
}