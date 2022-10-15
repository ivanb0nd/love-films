import React from 'react'
import classes from './CustomInput.module.css'

const CustomInput = ({ ...props }) => {
	return (
		<input {...props} className={classes.customInput} />
	)
}

export default CustomInput