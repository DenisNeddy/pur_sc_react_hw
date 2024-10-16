import styles from './Title.module.css';

const Title = ({children}) => {
	return (
		<h1 className={styles['page__title']}>
			{children}
		</h1>
	);
};

export default Title;