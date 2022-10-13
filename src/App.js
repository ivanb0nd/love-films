import React, { useState } from "react";
import Header from "./components/Header/Header";
import { useTheme } from "./hooks/useTheme";
import { ThemeContext } from "./providers/ThemeProvider/ThemeProvider";
import './styles/App.css'


function App() {
	const [theme, setTheme] = useState('light')

	useTheme(theme, setTheme)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className="wrapper">
				<Header />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;