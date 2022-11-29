import { useEffect } from "react"

export const useTheme = (theme) => {
	useEffect(() => {
		if (theme === 'light') {
			document.documentElement.classList.remove('dark')
			document.documentElement.classList.add(theme)
			localStorage.setItem('theme', theme)
		} else {
			document.documentElement.classList.remove('light')
			document.documentElement.classList.add(theme)
			localStorage.setItem('theme', theme)
		}
	}, [theme])
} 