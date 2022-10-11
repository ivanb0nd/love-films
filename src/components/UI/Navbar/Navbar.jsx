import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import MoonIcon from '../../icons/MoonIcon'

const Navbar = () => {
	return (
		<nav className={classes.navigation}>
			<ul className={classes.navigationList}>
				<li className={classes.navigationItem}>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'home'} >Главная</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'favorite'} >Избранное</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'popular'} >Популярное</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'about'} >О приложении</NavLink>
				</li>
			</ul>
			<button className={classes.themeButton}>
				<MoonIcon className={classes.themeButtonIcon} />
			</button>
		</nav>
	)
}

export default Navbar