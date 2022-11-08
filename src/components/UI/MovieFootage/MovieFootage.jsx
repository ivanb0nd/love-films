import React from 'react';
import FootageSlider from '../FootageSlider/FootageSlider';
import classes from './MovieFootage.module.css';

const MovieFootage = ({ footageData }) => {
	return (
		<div>
			<h2 className={classes.title}>Кадры из фильма</h2>
			<FootageSlider footageData={footageData} />
		</div>
	)
}

export default MovieFootage