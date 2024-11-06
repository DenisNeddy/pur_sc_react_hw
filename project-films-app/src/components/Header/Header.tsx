import styles from './Header.module.css';
import NavigationLink from '../NavLink/NavigationLink.tsx';
import LinkCounter from '../LinkCounter/LinkCounter.js';
import { useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../helpers/userContext.tsx';
import UserLogin from '../UserLogin/UserLogin.tsx';

const Header = () => {
	const { usersState, changeList } = useUserContext();

	useEffect(() => {
		changeList(usersState);	
	}, [usersState, changeList]);

	return (
		<section className={styles['header']}>
			<div className='container'>
				<div className={styles['header__wrapper']}>
					<div className={styles['header__logo']}>
						<NavLink to="/"><img src="/logo.svg" alt="Логотип FilmsApp"/></NavLink>
					</div>
					<nav className={styles['header__nav']}>
						<NavigationLink path='/'>Поиск фильмов</NavigationLink>
						<NavigationLink path='/favorites'>Мои фильмы<LinkCounter>2</LinkCounter></NavigationLink>
						<UserLogin />
					</nav>
				</div>
			</div>    
		</section>
	);
};

export default Header;