import React from 'react';
import FootageSlider from '../FootageSlider/FootageSlider';
import classes from './MovieFootage.module.css';

const MovieFootage = ({ footageData }) => {

	return (
		<div>
			<h2 className={classes.title}>Кадры из фильма</h2>
			{footageData.length === 0
				? <div className={classes.notReady}>
					<p className={classes.text}>Кадры к фильму ещё не готовы <br /> Мы работаем над этим </p>
					<span className={classes.emoji}>👨‍🔧</span>
				</div>
				: <FootageSlider footageData={footageData} />
			}
		</div>
	)
}

export default MovieFootage