import './Title.css';

const Title = ({children}) => {
	return (
		<h1 className="page__title">
			{children}
		</h1>
	);
};

export default Title;