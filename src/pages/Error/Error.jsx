import React from 'react'
import { Link } from 'react-router-dom'
import { getRandomNumber } from '../../utils/getRandomNumber'
import classes from './Error.module.css'

const Error = () => {
	const emoji = ['🤔', '🤨', '🙃', '😐', '😑', '😮', '😴']

	return (
		<section className={classes.errorPage}>
			<span className={classes.emoji}>{emoji[getRandomNumber(emoji.length)]}</span>
			<div className={classes.errorText}>
				<h1>Вы нашли не существующую страницу</h1>
				<p>Это классно, но что на ней делать?</p>
			</div>
			<Link className={classes.backLink} to="/home">Вернутся на главную</Link>
		</section>
	)
}

export default Error