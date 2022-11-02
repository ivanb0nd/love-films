import React from 'react'
import classes from './CustomSelect.module.css'

const CustomSelect = ({ options, defaultValue, value, onChange }) => {
	return (
		<div className={classes.selectWrapper}>
			<select
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className={classes.select}
			>
				<option className={classes.option} disabled value="">{defaultValue}</option>
				{options.map(option => {
					return <option key={option.value} className={classes.option} value={option.value}>{option.name}</option>
				})}
			</select>
		</div>
	)
}

export default CustomSelect