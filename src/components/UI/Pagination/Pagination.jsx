import React from 'react'
import { usePagination } from '../../../hooks/usePagination'
import classes from './Pagination.module.css'

const Pagination = ({ totalPage, page, changePage, canLoad }) => {
	let pagesArray = usePagination(totalPage)

	const buttonHandler = (pageNumber) => {
		if (canLoad) return
		changePage(pageNumber)
	}

	return (
		<div className={classes.pagination}>
			{pagesArray.map(pageNumber => {
				return (
					<button
						onClick={() => buttonHandler(pageNumber)}
						className={page === pageNumber ? `${classes.button} ${classes.active}` : `${classes.button}`}
						key={pageNumber}
					>
						{pageNumber}
					</button>
				)
			})}
		</div>
	)
}

export default Pagination