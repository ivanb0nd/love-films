import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeSwitcher from '../Buttons/ThemeSwitcher/ThemeSwitcher'
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={classes.navigation}>
			<ul className={classes.navigationList}>
				<li className={classes.navigationItem}>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'home'} >Главная</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'favorites'} >Избранное</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'popular'} >Популярное</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? `${classes.navigationLink} ${classes.active}` : `${classes.navigationLink}`} to={'about'} >О приложении</NavLink>
				</li>
			</ul>
			<ThemeSwitcher />
		</nav>
	)
}

export default Navbar