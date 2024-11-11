

import Paragraph from '../../components/Paragraph/Paragraph';
import styles from './Error.module.css';
import cn from 'classnames';
const ErrorPage = () => {
	return (
		<div className={styles['error-page']}>		
			<div className={styles['error-page__content']}>
				<Paragraph size={48} className={cn(styles['error-page__title'])}>Упс... Ничего не найдено</Paragraph>
				<Paragraph size={20} className={styles['error-page__text']}>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
			</div>
		</div>
	
	);
};

export default ErrorPage;