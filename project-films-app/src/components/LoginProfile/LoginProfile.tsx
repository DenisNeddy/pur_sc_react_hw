import Button from '../Button/Button.tsx';
import Input from '../Input/Input.js';
import Title from '../Title/Title.tsx';
import styles from './LoginProfile.module.css';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user.slice.ts';

const LoginProfile = () => {
	const [userValue, setUserValue] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserValue(e.target.value);	
	};
	const addUser = (e: FormEvent) => {
		e.preventDefault();
		navigate('/');
		dispatch(userActions.addUserName(userValue));
		setUserValue('');	
	};
	
	return (
		<div  className={styles['login-profile']}>
			<Title>Вход</Title>
			<form  className={styles['login-profile__form']} onSubmit={addUser}>
				<Input value={userValue} onChange={onChange} placeholder="Ваше имя" />
				<Button>Войти в профиль</Button>
			</form>
		</div>
	);
};

export default LoginProfile;