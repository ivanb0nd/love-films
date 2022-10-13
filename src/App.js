import React, { useState } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useTheme } from "./hooks/useTheme";
import { ThemeContext } from "./providers/ThemeProvider/ThemeProvider";
import './styles/App.css'


function App() {
	const [theme, setTheme] = useState('light')

	useTheme(theme, setTheme)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Header />
			<div className="wrapper">
				<AppRouter />
			</div>
			<Footer />
		</ThemeContext.Provider>
	);
}

export default App;