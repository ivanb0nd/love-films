import React from 'react'
import Logo from '../UI/Logo/Logo'
import Navbar from '../UI/Navbar/Navbar'
import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.headerContainer}>
				<Logo />
				<Navbar />
			</div>
		</header>
	)
}

export default Header