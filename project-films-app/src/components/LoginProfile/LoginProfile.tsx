import Button from '../Button/Button.tsx';
import { CardProps } from '../Card/Card.props.ts';
import Input from '../Input/Input.js';
import Title from '../Title/Title.tsx';
import styles from './LoginProfile.module.css';
import { FormEvent, useState } from 'react';
// import { LoginProfileProps } from './LoginProfile.props.ts';
import { useNavigate } from 'react-router-dom';

const LoginProfile = () => {
	const [userData, setUserData] = useState<{name: string, favoriteFilms: CardProps[]}>({name: '', favoriteFilms: []});
	const [userValue, setUserValue] = useState<string>('');
	const navigate = useNavigate();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserValue(e.target.value);
		setUserData(prevData => ({...prevData,name: e.target.value}));
		
	};

	const addUser = (e: FormEvent) => {
		e.preventDefault();
		navigate('/');
		localStorage.setItem('userData', JSON.stringify(userData));
		console.log(userData);
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