import styles from './AuthLayout.module.css';
import LoginProfile from '../../components/LoginProfile/LoginProfile';
import Header from '../../components/Header/Header.tsx';

const AuthLayout = () => {
	return (
		<>
			<Header/>
			<div className={styles['auth-layout__wrap']}>
				<div className='container'>
					<LoginProfile/>
				</div>
			</div>
		</>
	);
};

export default AuthLayout;