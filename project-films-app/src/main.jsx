import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
import './index.css';
import { UserContextProvider } from './context/user.context.tsx';


// import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout/Layout.tsx';
import Favorites from './components/pages/Favorites/Favorites.tsx';
import Error from './components/pages/Error/Error.tsx'
import Login from './components/pages/Login/Login.tsx'
import Films from './components/pages/Films/Films.jsx';
import Product from './components/pages/Product/Product.tsx'



const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Films />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/product/:id',
				element: <Product />
			}
		]
	},
	{
		path: '*',
		element: <Error/>
	}

	
]);







createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserContextProvider>
		<RouterProvider router={router} />
		</UserContextProvider>
	</StrictMode>
);
