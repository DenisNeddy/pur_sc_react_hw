import Button from '../Button/Button.tsx';
import Input from '../Input/Input.js';
import Paragraph from '../Paragraph/Paragraph.js';
import Title from '../Title/Title.js';
import styles from './Search.module.css';
import { FormEvent,  useState } from 'react';
import { SearchProps } from './Search.props.ts';


const Search = ({sFilms}: SearchProps) => {
	const icon = '/icon_search.svg';
	const [query, setQuery] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if(query) {

			sFilms(query);
		}
		console.log(query, 'Запрос');

	};

	return (
		<div className={styles['search']}>
			<Title>Поиск</Title>
			<Paragraph size={17}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<form className={styles['search__form']} onSubmit={handleSubmit}>
				<Input type='search__input' width='384px' icon={icon} placeholder="Введите название" onChange={(e) => setQuery(e.target.value)}/>
				<Button  className={styles['search__btn']}>Искать</Button>
			</form>
		</div>
	);
};

export default Search;