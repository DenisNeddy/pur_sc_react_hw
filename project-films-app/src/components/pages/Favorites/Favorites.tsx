/* eslint-disable react-hooks/exhaustive-deps */

import Title from '../../Title/Title';
import styles from './Favorites.module.css';
import { useState, useEffect } from 'react';
import { ListItem } from '../../../context/user.context.tsx';
import Card from '../../Card/Card.tsx';
import { useUserContext } from '../../../helpers/userContext.tsx';

const Favorites = () => {
	const { filmsState} = useUserContext();
	const [favoriteFilms, setFavoritesFilms] = useState<ListItem[]>([]);
	const list = filmsState.slice(0, 2).map(el => ({...el, favorite: true}));
	
	useEffect(() => {
		setFavoritesFilms(list);	
	}, []);

	return (
		<div className={styles['favorites-page']}>
			<Title>Избранное</Title>
			<div className={styles['favorites__list']}>

				{
					favoriteFilms.map(el => (
						<Card 	
							id={el['#IMDB_ID']}
							key={el['#IMDB_ID']} 
							title={el['#TITLE']} 
							rating={el['#RANK']} 
							img={el['#IMG_POSTER']} 	
						/>
					))
				}
			</div>
		</div>
	);
};

export default Favorites;