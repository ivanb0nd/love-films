import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import Popular from "../pages/Popular/Popular";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Movie from "../components/Movie/Movie";

export const routes = [
	{ path: '/home', element: <Home /> },
	{ path: '/home/:genre', element: <Home /> },
	{ path: '/movie/:movieId', element: <Movie /> },
	{ path: '/favorites', element: <Favorites /> },
	{ path: '/popular', element: <Popular /> },
	{ path: '/about', element: <About /> },
	{ path: '/error', element: <Error /> },
]