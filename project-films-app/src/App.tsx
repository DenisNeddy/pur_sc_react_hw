
// import styles from './App.module.css';
import CardList from './components/CardsList/CardsList.js';
import LoginProfile from './components/LoginProfile/LoginProfile.tsx';
import {useLayoutEffect, useEffect, useContext} from 'react';
import Search from './components/Search/Search.tsx';
import Header from './components/Header/Header.js';
import { UserContext, UserProps } from './context/user.context.tsx';
import cn from 'classnames';


function App() {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('MyComponent must be used within a MyProvider');
	}


	const { usersState, addItem, startList } = context;

	const getUser = (user: string) => {	
		if(usersState.length === 0) {
			const userM: UserProps = {name: user, isLogined: true};

			addItem(userM);
			// setUsersState((oldValue: any) => [...oldValue, {name: user, isLogined: true}]);
		}
	};

	useLayoutEffect(() => {
		

		const res: UserProps[]  = JSON.parse(localStorage.getItem('data') ?? '');
		if(res.length > 0 ) {
			startList(res);		
		}
		
	}, [startList]);
    
	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(usersState));	
	}, [usersState]);

	const DeleteLogin = () => {
		localStorage.setItem('data', JSON.stringify(''));
		startList([]);
	};

	return (
		<>   
			 <Header ResetLogin={DeleteLogin} /> 
			<div className={cn('container', 'app__layout')}>
				 { usersState.length === 0 && <LoginProfile onSubmit={getUser} /> } 
				<Search />
				<CardList />
			</div>
		</>
	);
}

export default App;
