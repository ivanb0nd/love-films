import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<ul className={classes.footerList}>
				<li className={classes.footerItem}>
					Created with React <span className={classes.reactIcon}>⚛</span>
				</li>
				<li className={classes.footerItem}>
					Data from <a className={classes.footerLink} href='https://kinopoiskapiunofficial.tech/' target='_blank' rel='noreferrer'>Kinopoisk Api Unofficial</a>
				</li>
				<li className={classes.footerItem}>
					Project on <a className={classes.footerLink} href='https://github.com/ivanb0nd/LoveFilms/' target='_blank' rel='noreferrer'>GitHub</a>
				</li>
				<li className={classes.footerItem}>
					© by <a className={classes.footerLink} target='_blank' rel='noreferrer' href={'https://github.com/ivanb0nd'}>ivanb0nd</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer