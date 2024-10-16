import styles from './Button.module.css';

const Button = ({ text , className = '', ...props}) => {
	return (
		<button className={className ? `${styles.button} ` + className : `${styles.button}` } {...props}> {text} </button>
	);
};

export default Button;