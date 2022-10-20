import React from 'react'
import SidebarItem from '../UI/SidebarItem/SidebarItem'
import classes from './Sidebar.module.css'

const Sidebar = ({ changeGenre }) => {
	const sidebarData = [
		{
			title: 'Жанры', options: [
				{ name: 'триллер', value: 1 },
				{ name: 'драма', value: 2 },
				{ name: 'криминал', value: 3 },
				{ name: 'мелодрама', value: 4 },
				{ name: 'детектив', value: 5 },
				{ name: 'фантастика', value: 6 },
				{ name: 'приключения', value: 7 },
				{ name: 'биография', value: 8 },
				{ name: 'вестерн', value: 10 },
				{ name: 'боевик', value: 11 },
				{ name: 'фэнтези', value: 12 },
				{ name: 'комедия', value: 13 },
				{ name: 'военный', value: 14 },
				{ name: 'история', value: 15 },
				{ name: 'ужасы', value: 17 },
				{ name: 'мультфильм', value: 18 },
				{ name: 'семейный', value: 19 },
				{ name: 'спорт', value: 21 },
				{ name: 'аниме', value: 24 }
			]
		},
	]

	return (
		<aside className={classes.sidebar}>
			{sidebarData.map(item => <SidebarItem changeGenre={changeGenre} key={item.title} item={item} />)}
		</aside>
	)
}

export default Sidebar