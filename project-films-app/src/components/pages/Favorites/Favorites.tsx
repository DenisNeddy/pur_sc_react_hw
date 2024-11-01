
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
	// const list = filmsState.filter(el => el.favorite === true);
	
	useEffect(() => {
		setFavoritesFilms(list);	
	}, [list]);

	return (
		<div className={styles['favorites-page']}>
			<Title>Избранное</Title>
			<div className={styles['favorites__list']}>

				{
					favoriteFilms.map(film => (
						<Card 	
							id={film.id}
							key={film.id} 
							title={film.title} 
							rating={film.rating} 
							img={film.img} 
							favorite={film.favorite}
						/>
					))
				}
			</div>
			{/* 
			<div className={styles['cards-list']}>
				{filmsState.map(el => (
					<Card 	
						id={el.id}
						key={el.id} 
						title={el.title} 
						rating={el.rating} 
						img={el.img} 
						favorite={el.favorite}
						
					/>
				))} 
			</div> */}
		</div>
	);
};

export default Favorites;