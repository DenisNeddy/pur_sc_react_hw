import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import Title from '../Title/Title.jsx';
import styles from './LoginProfile.module.css';


const LoginProfile = () => {
	return (
		<div className={styles['login-profile']}>
			<Title>Вход</Title>
			<Input placeholder="Ваше имя" />
			<Button text="Войти в профиль"/>
		</div>
	);
};

export default LoginProfile;