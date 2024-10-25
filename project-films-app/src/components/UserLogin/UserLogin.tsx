// import NavLink from '../../NavLink/NavLink';

import { useEffect, useContext } from 'react';
import NavLink from '../NavLink/NavLink.js';
import styles from './UserLogin.module.css';
import { UserContext } from '../../context/user.context.js';
import { UserLoginProps } from './UserLogin.props.js';

const UserLogin = ({user, Logout}:  UserLoginProps ) => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('MyComponent must be used within a MyProvider');
	}

	const { usersState, changeList } = context;

	useEffect(() => {
		changeList(usersState);
	}, [usersState, changeList]);

	return (
		<div className={styles['login-user']}>
			{
				usersState[0]?.isLogined ? <div className={styles['login-user__login']}><p className={styles['login-user__user']}>{user[0]?.name} <img src="/user-icon.svg" /></p>  <button className={styles['login-user__logout']} onClick={Logout}> Выход </button></div> : <NavLink>Войти</NavLink>
			}            
		</div>
	);
};

export default UserLogin;