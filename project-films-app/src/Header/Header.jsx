
import './Header.css';
import NavLink from '../NavLink/NavLink';
import LinkCounter from '../LinkCounter/LinkCounter';

const Header = () => {
	return (
		<section className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__logo">
						<img src="./logo.svg" alt="Логотип FilmsApp"/>
					</div>
					<nav className="header__nav">
						<NavLink className="current">Поиск фильмов</NavLink>
						<NavLink>Мои фильмы<LinkCounter>2</LinkCounter></NavLink>
						<NavLink>Войти <img src="./login.svg" /></NavLink>
					</nav>
				</div>
			</div>
            
		</section>
	);
};

export default Header;