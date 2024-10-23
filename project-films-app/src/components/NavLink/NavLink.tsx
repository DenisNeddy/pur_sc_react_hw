import styles from './NavLink.module.css';

const NavLink = ({className = '', href = '#', children}) => {
	return (
		<a href={href} className={className ? `${styles['nav__link']} ` + className : `${styles['nav__link']}`}>{children}</a>
	);
};

export default NavLink;