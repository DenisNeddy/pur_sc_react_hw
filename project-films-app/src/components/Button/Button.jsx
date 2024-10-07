import './Button.css';

const Button = ({ text , className = '', ...props}) => {
	return (
		<button className={className ? 'button ' + className : 'button' } {...props}> {text} </button>
	);
};

export default Button;