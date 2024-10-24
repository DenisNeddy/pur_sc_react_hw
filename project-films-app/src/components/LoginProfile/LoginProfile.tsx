import Button from '../Button/Button.tsx';
import Input from '../Input/Input.js';
import Title from '../Title/Title.tsx';

import styles from './LoginProfile.module.css';
import { FormEvent, useState } from 'react';
import { LoginProfileProps } from './LoginProfile.props.ts';

const LoginProfile = ({onSubmit}: LoginProfileProps) => {
	const [userName, setUserName] = useState<string>('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value );
	};

	const addUser = (e: FormEvent) => {
		e.preventDefault();
		onSubmit(userName);
		setUserName('');	
	};
	
	return (
		<div  className={styles['login-profile']}>
			<Title>Вход</Title>
			<form  className={styles['login-profile__form']} onSubmit={addUser}>
				<Input value={userName} onChange={onChange} placeholder="Ваше имя" />
				<Button>Вход</Button>
			</form>
		</div>
	);
};

export default LoginProfile;