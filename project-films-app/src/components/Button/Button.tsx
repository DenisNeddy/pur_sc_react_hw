import styles from './Button.module.css';
import { ButtonsProps } from './Button.props';

const Button = ({ children, className = '', ...props}:ButtonsProps) => {
	return (
		<button className={className ? `${styles.button} ` + className : `${styles.button}` } {...props}> {children} </button>
	);
};

export default Button;