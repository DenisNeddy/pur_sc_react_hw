
import styles from './App.module.css';
import CardList from './components/CardsList/CardsList.jsx';
import LoginProfile from './components/LoginProfile/LoginProfile.jsx';
// import LoginProfile from './components/LoginProfile/LoginProfile.jsx';
import {useEffect, useState} from 'react';

import Search from './components/Search/Search.jsx';
import Header from './Header/Header.jsx';

function App() {
	const [usersState,setUsersState] = useState([]);
	const [loginUser, setLoginUser] = useState('');

	const getUser = (user) => {
		setUsersState(oldValue => [...oldValue, {name: user, isLogined: true}]);
	};

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('data'));
		setLoginUser(res[0].name);		
	}, []);

	useEffect(() => {
		if(usersState.length) {

			localStorage.setItem('data', JSON.stringify(usersState));
		}
	}, [usersState]);

	

	

	

	// console.log(JSON.parse(localStorage.getItem('data')), 'ХУЙ');

	// console.log(usersState);
	
	return (
		<>   
			<Header />
			<div className={`container ${styles['app__layout']}`}>
	            <p style={{color: 'white'}}>{loginUser}</p>
				<LoginProfile onSubmit={getUser} />
				<Search />
				<CardList />
			</div>
		</>
	);
}

export default App;
