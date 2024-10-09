
import styles from './App.module.css';
import CardList from './components/CardsList/CardsList.jsx';
import LoginProfile from './components/LoginProfile/LoginProfile.jsx';
import {useEffect, useState} from 'react';
import Search from './components/Search/Search.jsx';
import Header from './Header/Header.jsx';

function App() {
	const [usersState,setUsersState] = useState([]);

	const getUser = (user) => {	
		if(usersState.length === 0) {
			setUsersState(oldValue => [...oldValue, {name: user, isLogined: true}]);
		}
	};

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('data'));
		if(res.length > 0) {
			setUsersState(res);		
		}
	}, []);


	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(usersState));	
	}, [usersState]);

	const DeleteLogin = () => {
		console.log('fuck');
		localStorage.setItem('data', JSON.stringify(''));
		setUsersState([]);
	};
	
	return (
		<>   
			<Header userData={usersState} ResetLogin={DeleteLogin} />
			<div className={`container ${styles['app__layout']}`}>
				{ usersState.length === 0 && <LoginProfile onSubmit={getUser} /> }
				<Search />
				<CardList />
			</div>
		</>
	);
}

export default App;
