
import styles from './Header.module.css';
import NavLink from '../NavLink/NavLink';
import LinkCounter from '../LinkCounter/LinkCounter';

const Header = () => {
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
						<NavLink>Войти <img src="./login.svg" /></NavLink>
					</nav>
				</div>
			</div>
            
		</section>
	);
};

export default Header;