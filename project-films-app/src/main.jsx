import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { UserContextProvider } from './context/user.context.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout/Layout.tsx';
import Favorites from './components/pages/Favorites/Favorites.tsx';
import Error from './components/pages/Error/Error.tsx'
import Films from './components/pages/Films/Films.tsx';
import Product from './components/pages/Product/Product.tsx'
import axios from 'axios';
import AuthLayout from './layout/AuthLayout/AuthLayout.tsx'
import RequireAuth from '../src/helpers/RequireAuth.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth><Layout /></RequireAuth>,
		children: [
			{
				path: '/',
				errorElement: <Error />,
				element: <Films />,
	
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <Error />,
				loader: async ({params}) => {
					const {data} = await axios.get(`https://search.imdbot.workers.dev/?tt=${params.id}`);
					return data;
				}
			
			},
			{
				path: '*',
				element: <Error/>
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout/>,
		
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserContextProvider>
		<RouterProvider router={router} />
		</UserContextProvider>
	</StrictMode>
);
