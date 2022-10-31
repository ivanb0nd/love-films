import React from 'react'
import classes from './SidebarButton.module.css'

const SidebarButton = ({ active, children, ...props }) => {
	return (
		<button {...props} className={active ? `${classes.sidebarButton} ${classes.active}` : `${classes.sidebarButton}`}>
			{children}
		</button>
	)
}

export default SidebarButton