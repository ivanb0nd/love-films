import { useEffect, useRef } from "react"

export const useInfiniteLoading = (ref, canLoad, isLoading, callback) => {
	const observer = useRef();

	useEffect(() => {
		if (isLoading) return
		if (observer.current) observer.current.disconnect()

		const observerCallback = (entries, observer) => {
			if (entries[0].isIntersecting && canLoad) {
				callback()
			}
		}

		observer.current = new IntersectionObserver(observerCallback)
		observer.current.observe(ref.current)
	}, [isLoading])
} 