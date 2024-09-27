import './LinkCounter.css';

const LinkCounter = ({children}) => {
	return (
		<div className="nav__counter link-counter">
			{children}
		</div>
	);
};

export default LinkCounter;