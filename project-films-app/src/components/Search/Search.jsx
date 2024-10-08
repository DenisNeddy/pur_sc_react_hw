import Button from '../Button/Button';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph.jsx';
import Title from '../Title/Title.jsx';
import styles from './Search.module.css';


const Search = () => {
	const icon = '/icon_search.svg';
	return (
		<div className={styles['search']}>
			<Title>Поиск</Title>
			<Paragraph size={17}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<div className={styles['search__wrapper']}>
				<Input width="384px" icon={icon} placeholder="Введите название" />
				<Button text="Искать" className={styles['search__btn']}/>
			</div>
		</div>
	);
};

export default Search;