import styles from './Input.module.css';
import { forwardRef } from 'react';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input ({type='text', icon = '', width = '100%', onChange = f => f, ...props}: InputProps, ref) {
	return (
		<div className={styles['input__wrapper']}  style={{width: width}}>
			{icon ? <div className={styles['input__icon-wrapper']}><img src={icon}/></div> : ''}
			<input className={styles['input']} type={type} {...props} onChange={onChange} ref={ref}/>
		</div>
	);
});

export default Input;