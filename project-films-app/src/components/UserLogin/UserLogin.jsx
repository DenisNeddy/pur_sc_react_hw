// import NavLink from '../../NavLink/NavLink';

import { useEffect, useContext } from 'react';
import NavLink from '../NavLink/NavLink.jsx';
import styles from './UserLogin.module.css';
import { UserContext } from '../../context/user.context.jsx';

const UserLogin = ({user, Logout}) => {
	// const [isLog, setIsLog] = useState([]);
	const {usersState, setUsersState} = useContext(UserContext);

	useEffect(() => {
		setUsersState(usersState);
	}, [usersState, setUsersState]);

	return (
		<div className={styles['login-user']}>
			{
				usersState[0]?.isLogined ? <div className={styles['login-user__login']}><p className={styles['login-user__user']}>{user[0]?.name} <img src="/user-icon.svg" /></p>  <button className={styles['login-user__logout']} onClick={Logout}> Выход </button></div> : <NavLink>Войти</NavLink>
			}            
		</div>
	);
};

export default UserLogin;