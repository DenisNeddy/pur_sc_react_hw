
import {useEffect,useState} from 'react';
import styles from './UserLogin.module.css';
import NavigationLink from '../NavLink/NavigationLink';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {userActions} from '../../store/user.slice';

const UserLogin = () => {
	const [name, setName] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		const user = localStorage.getItem('userData') || '';
		if(user) {
			setName(JSON.parse(user).name);
		} 
	}, [name]);
	const logout = () => {
		dispatch(userActions.resetFilmList());
		localStorage.removeItem('userData');
		setName('');
		navigate('/auth');
	};
	
	return (
		<div>
			{
				name?.length > 0 ? <div className={styles['login-user__login']}><p className={styles['login-user__user']}>{name} <img src="/user-icon.svg" /></p>  <button className={styles['login-user__logout']} onClick={logout}> Выход </button></div> : <NavigationLink path="/auth">Войти</NavigationLink>
			} 
		</div>
	);
};
export default UserLogin;