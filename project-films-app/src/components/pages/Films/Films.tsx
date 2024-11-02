import Search from '../../Search/Search.tsx';
import CardList from '../../CardsList/CardsList.tsx';
import styles from './Films.module.css';
import { useState } from 'react';
import axios from 'axios';

import { useUserContext } from '../../../helpers/userContext.tsx';

const Films = () => {
    	const { filmsState } = useUserContext();
	const [films, setFilms] = useState({});
	// const [filter, setFilter] = useState<string>('');

	// useEffect(() => {
	// 	getFilms(filter);
	// }, [filter]);

	const getFilms = async (q: string) => {
		const {data} = await axios.get(`https://search.imdbot.workers.dev/?q=${q}`);
		setFilms(data);
	};

	console.log(films);
	//ghb

	// const updateFilter = (e: FormEvent) => {
	// 	setFilter(e.target.value);
	// };


	return (
		<div className={styles['films-page']} >
			<Search sFilms={getFilms} />
			<CardList films={'description' in films ? films.description : filmsState} /> 
		</div>     
	);
};

export default Films;