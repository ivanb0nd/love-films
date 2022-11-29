import React, { useState } from "react";
import { useEffect } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileMenu from "./components/UI/MobileMenu/MobileMenu";
import { useTheme } from "./hooks/useTheme";
import { FavoritesContext } from "./providers/FavoritesProvider/FavoritesProvider";
import { ThemeContext } from "./providers/ThemeProvider/ThemeProvider";
import './styles/App.css'


function App() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme || 'dark'
	})

	const [favorites, setFavorites] = useState(() => {
		const saved = localStorage.getItem('favorites')
		const initialFavorites = JSON.parse(saved)
		return initialFavorites || []
	})

	useTheme(theme)

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<FavoritesContext.Provider value={{ favorites, setFavorites }}>
				<Header />
				<div className="wrapper">
					<div className="container">
						<AppRouter />
					</div>
				</div>
				<Footer />
				<MobileMenu />
			</FavoritesContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;