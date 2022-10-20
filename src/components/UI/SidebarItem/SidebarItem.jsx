import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './SidebarItem.module.css'

const SidebarItem = ({ item, changeGenre }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className={isOpen ? `${classes.sidebarItem} ${classes.isOpen}` : `${classes.sidebarItem}`}>
			<button className={classes.itemButton} onClick={() => setIsOpen(!isOpen)}>{item.title}</button>
			<ul className={classes.optionList}>
				{item.options.map((option) =>
					<li className={classes.option} key={option.value}>
						<NavLink onClick={() => changeGenre(option.value)} className={({ isActive }) => isActive ? `${classes.link} ${classes.active}` : `${classes.link}`} to={`/home/${option.value}`}>{option.name}</NavLink>
					</li>)}
			</ul>
		</div>
	)
}

export default SidebarItem