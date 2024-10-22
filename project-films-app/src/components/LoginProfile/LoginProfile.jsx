import Button from '../Button/Button.tsx';
import Input from '../Input/Input.jsx';
import Title from '../Title/Title.jsx';
import styles from './LoginProfile.module.css';
import { useState } from 'react';

const LoginProfile = ({onSubmit}) => {
	let [userName, setUserName] = useState('');

	const onChange = (e) => {
		setUserName(e.target.value);
	};

	const addUser = (e) => {
		e.preventDefault();
		onSubmit(userName);
		setUserName('');	
	};
	
	return (
		<div  className={styles['login-profile']}>
			<Title>Вход</Title>
			<form  className={styles['login-profile__form']} onSubmit={addUser}>
				<Input value={userName} onChange={onChange} placeholder="Ваше имя" />
				<Button text="Войти в профиль"/>
			</form>
		</div>
	);
};

export default LoginProfile;