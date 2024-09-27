import './NavLink.css';

const NavLink = ({current, href = '#', children}) => {
	return (
		<a href={href} className={current ? 'nav__link current' : 'nav__link'}>{children}</a>
	);
};

export default NavLink;