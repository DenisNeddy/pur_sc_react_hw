
import styles from './App.module.css';
import CardList from './components/CardsList/CardsList.jsx';
import LoginProfile from './components/LoginProfile/LoginProfile.jsx';
import {useLayoutEffect, useEffect, useContext} from 'react';
import Search from './components/Search/Search.jsx';
import Header from './components/Header/Header.jsx';
import { UserContext } from './context/user.context.jsx';

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

	console.log(usersState);
	
	return (
		<>   
			 <Header ResetLogin={DeleteLogin} /> 
			<div className={`container ${styles['app__layout']}`}>
				 { usersState.length === 0 && <LoginProfile onSubmit={getUser} /> } 
				<Search />
				<CardList />
			</div>
		</>
	);
}

export default App;
