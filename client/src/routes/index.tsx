import { createBrowserRouter } from 'react-router-dom'
import { PageError } from '../pages/errorPage'
import { Home } from '../pages/homePage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <PageError />,
	},
])
