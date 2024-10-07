import './Input.css';

const Input = ({type='text', icon = '', width = '100%', onChange= f => f, ...props}) => {
	return (
		<div className="input__wrapper" style={{width: width}}>
			{icon ? <div className="input__icon-wrapper"><img src={icon}/></div> : ''}
			<input className="input" type={type} {...props} onChange={onChange} />
		</div>
	);
};

export default Input;