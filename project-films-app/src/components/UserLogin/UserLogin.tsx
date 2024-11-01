// import NavLink from '../../NavLink/NavLink';

import { useEffect } from 'react';
import NavLink from '../NavLink/NavigationLink.js';
import styles from './UserLogin.module.css';
import { UserLoginProps } from './UserLogin.props.js';

import { useUserContext } from '../../helpers/userContext.js';

const UserLogin = ({user, Logout}:  UserLoginProps ) => {

	const { usersState, changeList } = useUserContext();

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