// import NavLink from '../../NavLink/NavLink';

import { useState, useEffect } from 'react';
import NavLink from '../../NavLink/NavLink';
import styles from './UserLogin.module.css';

const UserLogin = ({user, Logout}) => {
	const [isLog, setIsLog] = useState([]);

	const loginBlock = <div className={styles['login-user__login']}><p className={styles['login-user__user']}>{user[0]?.name} <img src="/user-icon.svg" /></p>  <button className={styles['login-user__logout']} onClick={Logout}> Выход </button></div>;
	useEffect(() => {
		setIsLog(user);
	}, [user]);

	return (
		<div className={styles['login-user']}>
			{
				isLog[0]?.isLogined ? loginBlock : <NavLink>Войти</NavLink>
			} 
            
		</div>
	);
};

export default UserLogin;