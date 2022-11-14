export const convertMovieToObject = (movie) => {
	return {
		id: movie.kinopoiskId ? movie.kinopoiskId : movie.imdbId ? movie.imdbId : movie.filmId ? movie.filmId : movie.id,
		kinopoiskId: movie.kinopoiskId,
		posterUrl: movie.posterUrl,
		posterUrlPreview: movie.posterUrlPreview,
		ratingImdb: movie.ratingImdb ? movie.ratingImdb : movie.rating,
		ratingKinopoisk: movie.ratingKinopoisk ? movie.ratingKinopoisk : movie.rating,
		nameRu: movie.nameRu,
		nameOriginal: movie.nameOriginal,
	}
}