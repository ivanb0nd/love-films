import React, { useContext } from 'react'
import { ThemeContext } from '../../../../providers/ThemeProvider/ThemeProvider'
import MoonIcon from '../../../icons/MoonIcon'
import SunIcon from '../../../icons/SunIcon'
import classes from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const switchTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

	return (
		<button onClick={switchTheme} className={classes.themeButton}>
			{theme === 'light'
				? <MoonIcon className={classes.darkThemeButtonIcon} />
				: <SunIcon className={classes.lightThemeButtonIcon} />
			}
		</button>
	)
}

export default ThemeSwitcher