
import styles from './Header.module.css';
import NavLink from '../NavLink/NavLink.js';
import LinkCounter from '../LinkCounter/LinkCounter.js';
import { useEffect, useContext } from 'react';
import UserLogin from '../UserLogin/UserLogin.js';
import { UserContext } from '../../context/user.context.js';
import { HeaderProps } from './Header.props.js';

const Header = ({ResetLogin }: HeaderProps) => {
	const {usersState, setUsersState} = useContext(UserContext);
	
	useEffect(() => {
		setUsersState(usersState);	
	}, [usersState, setUsersState]);

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