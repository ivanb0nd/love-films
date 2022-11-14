export const convertMovieToObject = (movie) => {
	return {
		id: movie.kinopoiskId ? movie.kinopoiskId : movie.imdbId,
		kinopoiskId: movie.kinopoiskId,
		posterUrl: movie.posterUrl,
		posterUrlPreview: movie.posterUrlPreview,
		ratingImdb: movie.ratingImdb,
		ratingKinopoisk: movie.ratingKinopoisk,
		nameRu: movie.nameRu,
		nameOriginal: movie.nameOriginal,
	}
}