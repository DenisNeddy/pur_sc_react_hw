import styles from './NavigationLink.module.css';
import { NavigationLinkProps } from './NavigationLink.props';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const NavigationLink = ({ path = '', children}: NavigationLinkProps) => {
	return (
		<NavLink to={path} className={({isActive}) => cn(styles['nav__link'], {
			[styles.active]: isActive
		})}>{children}</NavLink>
	);
};

export default NavigationLink;