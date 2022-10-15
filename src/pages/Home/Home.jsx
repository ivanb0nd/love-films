import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import CustomInput from '../../components/UI/Input/CustomInput'
import classes from './Home.module.css'

const Home = () => {
	return (
		<div className={classes.home}>
			<div className={classes.searchInput}>
				<CustomInput placeholder="Поиск любого фильма или сериала" />
			</div>
			<div className={classes.sidebar}>
				<Sidebar />
			</div>
			<main className={classes.main}>
				FILMS
			</main>
		</div>
	)
}

export default Home