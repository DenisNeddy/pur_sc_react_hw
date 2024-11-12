import Search from '../../components/Search/Search.tsx';
import CardList from '../../components/CardsList/CardsList.tsx';
import styles from './Films.module.css';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useUserContext } from '../../helpers/userContext.tsx';
import Error from '../Error/Error.tsx';

const Films = () => {
    	const { filmsState } = useUserContext();
	const [films, setFilms] = useState(filmsState);
	const getFilms = async (q: string) => {
		try {
			const {data} = await axios.get(`https://search.imdbot.workers.dev/?q=${q}`);	
			setFilms(data.description);
		} catch(e) {
			if(e instanceof AxiosError) {
				console.log(e.message);
			}
		}
	};
	
	return (
		<div className={styles['films-page']} >
			<Search searchFilms={getFilms} />
			{films.length > 0 ? <CardList films={films} /> : <Error/> }
		</div>     
	);
};

export default Films;