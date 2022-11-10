export const getRatingAge = (ageInfo) => {
	if (!ageInfo) return
	const regex = /\d+/
	return ageInfo.match(regex)[0]
}