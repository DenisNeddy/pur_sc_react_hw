import styles from './Title.module.css';
import { TitleProps } from './Title.props';

const Title = ({children}: TitleProps) => {
	return (
		<h1 className={styles['page__title']}>
			{children}
		</h1>
	);
};

export default Title;