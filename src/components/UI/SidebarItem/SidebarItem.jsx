import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './SidebarItem.module.css'

const SidebarItem = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={isOpen ? `${classes.sidebarItem} ${classes.isOpen}` : `${classes.sidebarItem}`}>
			<button className={classes.itemButton} onClick={() => setIsOpen(!isOpen)}>{item.title}</button>
			<ul className={classes.optionList}>
				{item.options.map((option) =>
					<li className={classes.option} key={option.value}>
						<Link className={classes.link} to={'/asd'}>{option.name}</Link >
					</li>)}
			</ul>
		</div>
	)
}

export default SidebarItem