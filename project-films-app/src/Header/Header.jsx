
import styles from './Header.module.css';
import NavLink from '../NavLink/NavLink';
import LinkCounter from '../LinkCounter/LinkCounter';
import { useState, useEffect } from 'react';
import UserLogin from '../components/UserLogin/UserLogin';

const Header = ({ userData, ResetLogin }) => {
	const [user, setUser] = useState([]);
	
	useEffect(() => {
		setUser(userData);	
	}, [userData]);

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
						<UserLogin user={user} Logout={ResetLogin} />
					</nav>
				</div>
			</div>
            
		</section>
	);
};

export default Header;