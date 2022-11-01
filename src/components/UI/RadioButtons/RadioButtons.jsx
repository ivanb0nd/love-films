import React from 'react'
import classes from './RadioButtons.module.css'

const RadioButtons = ({ buttons, name, moviesType, changeMoviesType, canChange }) => {
	const inputHandler = (movieType) => {
		if (canChange) return
		changeMoviesType(movieType)
	}

	return (
		<div className={classes.radioButtons}>
			{buttons.map(button => {
				return <label key={button.value} className={button.value === moviesType ? `${classes.button} ${classes.active}` : classes.button}>
					<input className={classes.buttonInput} onChange={() => inputHandler(button.value)} checked={button.value === moviesType ? true : false} name={name} type="radio" value={button.value} />{button.text}
				</label>
			})}
		</div>
	)
}

export default RadioButtons