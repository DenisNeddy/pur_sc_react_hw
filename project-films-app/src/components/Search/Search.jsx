import Button from '../Button/Button';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph.jsx';
import Title from '../Title/Title.jsx';
import './Search.css';


const Search = () => {
	const icon = '/icon_search.svg';
	return (
		<div className="search">
			<Title>Поиск</Title>
			<Paragraph size={17}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<div className="search__wrapper">
				<Input width="384px" icon={icon} placeholder="Введите название" />
				<Button text="Искать" className="search__btn"/>
			</div>
		</div>
	);
};

export default Search;