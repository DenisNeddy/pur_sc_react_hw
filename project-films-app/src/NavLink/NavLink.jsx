import './NavLink.css';

const NavLink = ({className = '', href = '#', children}) => {
	return (
		<a href={href} className={className ? 'nav__link ' + className : 'nav__link'}>{children}</a>
	);
};

export default NavLink;