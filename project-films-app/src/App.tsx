
// import styles from './App.module.css';
import CardList from './components/CardsList/CardsList.js';
import LoginProfile from './components/LoginProfile/LoginProfile.tsx';
import {useLayoutEffect, useEffect, useContext} from 'react';
import Search from './components/Search/Search.tsx';
import Header from './components/Header/Header.js';
import { UserContext } from './context/user.context.js';
import cn from 'classnames';

function App() {
	const {usersState,setUsersState} = useContext(UserContext);
	const getUser = (user) => {	
		if(usersState.length === 0) {
			setUsersState(oldValue => [...oldValue, {name: user, isLogined: true}]);
		}
	};

	useLayoutEffect(() => {
		const res = JSON.parse(localStorage.getItem('data'));
		if(res.length > 0) {
			setUsersState(res);		
		}
	}, [setUsersState]);
    
	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(usersState));	
	}, [usersState]);

	const DeleteLogin = () => {
		localStorage.setItem('data', JSON.stringify(''));
		setUsersState([]);
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
