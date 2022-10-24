import React from 'react'
import SearchIcon from '../../../icons/SearchIcon'
import classes from './SearchButton.module.css'

const SearchButton = ({ ...props }) => {
	return (
		<button {...props} className={classes.searchButton}>
			<SearchIcon className={classes.searchIcon} />
		</button>
	)
}

export default SearchButton