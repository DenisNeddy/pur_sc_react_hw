import styles from './NavLink.module.css';
import { NavLinkProps } from './NavLink.props';

const NavLink = ({className = '', href = '#', children}: NavLinkProps) => {
	return (
		<a href={href} className={className ? `${styles['nav__link']} ` + className : `${styles['nav__link']}`}>{children}</a>
	);
};

export default NavLink;