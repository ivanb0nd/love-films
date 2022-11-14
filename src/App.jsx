import React, { useState } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useTheme } from "./hooks/useTheme";
import { FavoritesContext } from "./providers/FavoritesProvider/FavoritesProvider";
import { ThemeContext } from "./providers/ThemeProvider/ThemeProvider";
import './styles/App.css'


function App() {
	const [theme, setTheme] = useState('light')
	const [favorites, setFavorites] = useState([])
	useTheme(theme, setTheme)

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
			</FavoritesContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;