import Button from '../Button/Button.tsx';
import Input from '../Input/Input.js';
import Paragraph from '../Paragraph/Paragraph.js';
import Title from '../Title/Title.js';
import styles from './Search.module.css';


const Search = () => {
	const icon = '/icon_search.svg';
	return (
		<div className={styles['search']}>
			<Title>Поиск</Title>
			<Paragraph size={17}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<div className={styles['search__wrapper']}>
				<Input width="384px" icon={icon} placeholder="Введите название" />
				<Button  className={styles['search__btn']}>Искать</Button>
			</div>
		</div>
	);
};

export default Search;