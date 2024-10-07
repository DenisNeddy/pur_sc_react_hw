import './LinkCounter.css';

const LinkCounter = ({children, className = ''}) => {
	return (
		<div className={className ? 'link-counter ' + className : 'link-counter' }>
			{children}
		</div>
	);
};

export default LinkCounter;