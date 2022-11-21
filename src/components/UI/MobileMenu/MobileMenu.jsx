import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutIcon from '../../icons/AboutIcon'
import FavoritesIcon from '../../icons/FavoritesIcon'
import HomeIcon from '../../icons/HomeIcon'
import PopularIcon from '../../icons/PopularIcon'
import classes from './MobileMenu.module.css'

const MobileMenu = () => {
	return (
		<nav className={classes.mobileMenu}>
			<ul className={classes.menu}>
				<li className={classes.item}>
					<NavLink to={'/home'} className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}>
						<HomeIcon className={`${classes.icon} ${classes.homeIcon}`} />
						Главная
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to={'/favorites'} className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}>
						<FavoritesIcon className={`${classes.icon} ${classes.favoriteIcon}`} />
						Избранное
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to={'/popular'} className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}>
						<PopularIcon className={`${classes.icon} ${classes.popularIcon}`} />
						Популярное
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to={'/about'} className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}>
						<AboutIcon className={`${classes.icon} ${classes.aboutIcon}`} />
						О приложении
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default MobileMenu