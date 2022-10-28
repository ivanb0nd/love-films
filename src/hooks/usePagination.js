import { useMemo } from "react"

export const usePagination = (pagesCount) => {
	const pagesArray = useMemo(() => {
		let result = []

		for (let i = 1; i <= pagesCount; i++) {
			result.push(i)
		}

		return result
	}, [pagesCount])

	return pagesArray
}