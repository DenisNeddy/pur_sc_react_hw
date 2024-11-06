
import { useEffect, useState } from 'react';
import styles from './UserLogin.module.css';
import NavigationLink from '../NavLink/NavigationLink';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
	const [name, setName] = useState<string>('');
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem('user');
		if(user) {
			setName(user);
		}
	}, [name]);

	const logout = () => {
		localStorage.removeItem('user');
		navigate('/auth');
	};

	return (
		<div>
			{
				name.length > 0 ? <div className={styles['login-user__login']}><p className={styles['login-user__user']}>{name} <img src="/user-icon.svg" /></p>  <button className={styles['login-user__logout']} onClick={logout}> Выход </button></div> : <NavigationLink path="/auth">Войти</NavigationLink>
			}
		</div>
	);
};

export default UserLogin;