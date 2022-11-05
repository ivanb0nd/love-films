export const convertMovieToObject = (movie) => {
	return {
		kinopoiskId: movie.kinopoiskId,
		posterUrl: movie.posterUrl,
		posterUrlPreview: movie.posterUrlPreview,
		ratingImdb: movie.ratingImdb,
		ratingKinopoisk: movie.ratingKinopoisk
	}
}