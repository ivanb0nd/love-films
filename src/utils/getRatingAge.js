export const getRatingAge = (ageInfo) => {
	const regex = /\d+/
	return ageInfo.match(regex)[0]
}