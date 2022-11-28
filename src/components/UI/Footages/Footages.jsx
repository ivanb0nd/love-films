import React from 'react'
import 'swiper/css'
import classes from './Footages.module.css'

const FootageSlider = ({ footageData }) => {

	return (
		<div className={classes.footages}>
			{footageData.map(footage => {
				return <div key={footage.imageUrl} className={classes.footage}>
					<picture>
						<source srcSet={footage.imageUrl} media="(min-width: 900px)" />
						<img src={footage.previewUrl} alt="Кадр из фильма" />
					</picture>
				</div>
			})}
		</div>
	)
}

export default FootageSlider