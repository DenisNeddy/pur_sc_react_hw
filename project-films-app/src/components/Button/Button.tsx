import styles from './Button.module.css';
import { ButtonsProps } from './Button.props';

const Button = ({ text , className = '', ...props}:ButtonsProps) => {
	return (
		<button className={className ? `${styles.button} ` + className : `${styles.button}` } {...props}> {text} </button>
	);
};

export default Button;