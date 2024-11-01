// import React from 'react';
import Header from '../../components/Header/Header';
// import CardList from './components/CardsList/CardsList.js';
// import LoginProfile from './components/LoginProfile/LoginProfile.tsx';
// import {useLayoutEffect, useEffect, useContext} from 'react';
// import Search from '../../components/Search/Search';
// import Header from './components/Header/Header.js';
// import { UserContext, UserProps } from '../../context/user.context';
import { Outlet } from 'react-router-dom';

// import cn from 'classnames';



export const Layout = () => {
	// const context = useContext(UserContext);

	// if (!context) {
	// 	throw new Error('MyComponent must be used within a MyProvider');
	// }

	// const { usersState, changeList } = context;

	// const getUser = (user: string) => {	
	// 	if(usersState.length === 0) {
	// 		const userData: UserProps = {name: user, isLogined: true};
	// 		addItem(userData);
	// 	}
	// };

	// useLayoutEffect(() => {
		
	// 	const res: UserProps[]  = JSON.parse(localStorage.getItem('data') ?? '');
	// 	if(res.length > 0 ) {
	// 		changeList(res);		
	// 	}
		
	// }, [changeList]);
    
	// useEffect(() => {
	// 	localStorage.setItem('data', JSON.stringify(usersState));	
	// }, [usersState]);

	// const DeleteLogin = () => {
	// 	localStorage.setItem('data', JSON.stringify(''));
	// 	changeList([]);
	// };

	return (
		<>
			<div>
				<Header />
			</div>
			<div>
				<div className="container">
					<Outlet/>
				</div>
			</div>
		</>
	);
};

export default Layout;