import styles from './Input.module.css';

const Input = ({type='text', icon = '', width = '100%', onChange= f => f, ...props}) => {
	return (
		<div className={styles['input__wrapper']}  style={{width: width}}>
			{icon ? <div className={styles['input__icon-wrapper']}><img src={icon}/></div> : ''}
			<input className={styles['input']} type={type} {...props} onChange={onChange} />
		</div>
	);
};

export default Input;