import React from 'react'
import { Link } from 'react-router-dom'
import classes from './About.module.css'

const About = () => {
	return (
		<main className={classes.about}>
			<h1 className={classes.title}>О приложении <span className={classes.highlight}>LoveFilms</span></h1>
			<p>Данное приложение позволяет просматривать <Link to={'/home'} className={classes.aboutLink}>коллекции фильмов по различным жанрам</Link> (триллер, драма, криминал, мелодрама, детектив, фантастика, приключения, биография, вестерн, боевик, фэнтези, комедия, военный, история, ужасы, мультфильм, семейный, спорт, аниме), осуществлять поиск конкретного фильма по ключевому слову или доступным фильтрам, получать краткую информацию о выбранном фильме, просматривать <Link to={'/popular'} className={classes.aboutLink}>100 популярных фильмов</Link> на данный момент, а также составить список <Link to={'/favorites'} className={classes.aboutLink}>избранных фильмов</Link></p>
		</main>
	)
}

export default About