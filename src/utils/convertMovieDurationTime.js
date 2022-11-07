export const convertMovieDurationTime = (timeInMinutes) => {
	let movieDurationInMinutes = timeInMinutes
	let hours = 0

	while (movieDurationInMinutes >= 60) {
		movieDurationInMinutes -= 60
		hours += + 1
	}

	return `${hours}:${movieDurationInMinutes}`
}