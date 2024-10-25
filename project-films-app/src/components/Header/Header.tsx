import styles from './Header.module.css';
import NavLink from '../NavLink/NavLink.js';
import LinkCounter from '../LinkCounter/LinkCounter.js';
import UserLogin from '../UserLogin/UserLogin.tsx';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { HeaderProps } from './Header.props.js';

const Header = ({ResetLogin }: HeaderProps) => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('MyComponent must be used within a MyProvider');
	}

	const { usersState, changeList } = context;

	useEffect(() => {
		changeList(usersState);	
	}, [usersState, changeList]);

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