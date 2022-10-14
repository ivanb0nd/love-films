import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../../router/routes'

const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
			<Route path='/' element={<Navigate to={'home'} replace />} />
			<Route path='*' element={<Navigate to={'error'} replace />} />
		</Routes>
	)
}

export default AppRouter
