import styles from './Header.module.css';
import NavigationLink from '../NavLink/NavigationLink.tsx';
import LinkCounter from '../LinkCounter/LinkCounter.js';
// import UserLogin from '../UserLogin/UserLogin.tsx';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../context/user.context';
// import { HeaderProps } from './Header.props.js';

const Header = () => {
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
						<NavigationLink path='/'>Поиск фильмов</NavigationLink>
						<NavigationLink path='/favorites'>Мои фильмы<LinkCounter>2</LinkCounter></NavigationLink>
						<NavigationLink path='/login'>Войти</NavigationLink>
						{/* <UserLogin user={usersState} Logout={ResetLogin} /> */}
					</nav>
				</div>
			</div>    
		</section>
	);
};

export default Header;