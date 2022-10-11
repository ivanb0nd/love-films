import React from 'react'
import HeartIcon from '../../icons/HeartIcon'
import classes from './Logo.module.css'

const Logo = () => {
	return (
		<div className={`${classes.logo}`}>
			<HeartIcon className={`${classes.logoIcon}`} />
			Films
		</div>

	)
}

export default Logo