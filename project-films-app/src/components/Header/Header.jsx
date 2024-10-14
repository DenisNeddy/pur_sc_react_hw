
import styles from './Header.module.css';
import NavLink from '../NavLink/NavLink';
import LinkCounter from '../LinkCounter/LinkCounter';
import { useEffect, useContext } from 'react';
import UserLogin from '../UserLogin/UserLogin.jsx';
import { UserContext } from '../../context/user.context.jsx';

const Header = ({ userData, ResetLogin }) => {
	const {usersState, setUsersState} = useContext(UserContext);
	
	useEffect(() => {
		setUsersState(userData);	
	}, [userData, setUsersState]);

	return (
		<section className={styles['header']}>
			<div className='container'>
				<div className={styles['header__wrapper']}>
					<div className={styles['header__logo']}>
						<img src="./logo.svg" alt="Логотип FilmsApp"/>
					</div>
					<nav className={styles['header__nav']}>
						<NavLink className={styles['current']}>Поиск фильмов</NavLink>
						<NavLink>Мои фильмы<LinkCounter>2</LinkCounter></NavLink>
						<UserLogin user={usersState} Logout={ResetLogin} />
					</nav>
				</div>
			</div>
            
		</section>
	);
};

export default Header;