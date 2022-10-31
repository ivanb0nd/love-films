import React, { useState } from 'react'
import SidebarButton from '../Buttons/SidebarButton/SidebarButton'
import classes from './SidebarItem.module.css'

const SidebarItem = ({ item, genre, changeGenre }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className={isOpen ? `${classes.sidebarItem} ${classes.isOpen}` : `${classes.sidebarItem}`}>
			<button className={classes.itemButton} onClick={() => setIsOpen(!isOpen)}>{item.title}</button>
			<ul className={classes.optionList}>
				{item.options.map((option) =>
					<li className={classes.option} key={option.value}>
						<SidebarButton onClick={() => changeGenre(option.value)} active={genre === option.value ? true : false}>{option.name}</SidebarButton>
					</li>)}
			</ul>
		</div>
	)
}

export default SidebarItem