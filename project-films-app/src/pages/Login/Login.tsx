import LoginProfile from '../../components/LoginProfile/LoginProfile';
import styles from './Login.module.css';


const Login = () => {
	return (
		<div className={styles['login-page']}>
			<LoginProfile/>
		</div>
	);
};

export default Login;