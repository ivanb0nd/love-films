export const convertMovieDurationTime = (timeInMinutes) => {
	let movieDurationInMinutes = timeInMinutes
	let hours = 0
	let minutes = 0

	while (movieDurationInMinutes >= 60) {
		movieDurationInMinutes -= 60
		hours += + 1
	}

	if (movieDurationInMinutes < 10) {
		minutes = '0' + movieDurationInMinutes
	} else {
		minutes = movieDurationInMinutes
	}



	return `${hours}:${minutes}`
}