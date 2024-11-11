 

import Title from '../../components/Title/Title.tsx';
import styles from './Favorites.module.css';
// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
// import Card from '../../components/Card/Card.tsx';

// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store.ts';
// import { CardProps } from '../../components/Card/Card.props.ts';

const Favorites = () => {

	// const list = filmsState.slice(0, 2).map(el => ({...el, favorite: true}));
	const films = localStorage.getItem('userData') || '';
	const [list, setList] = useState([]);

	console.log(films, 'AAAAAa');
	
	useEffect(() => {
		setList(JSON.parse(films).favoriteFilms);	
	}, []);

	return (
		<div className={styles['favorites-page']}>
			<Title>Избранное</Title>
			<div className={styles['favorites__list']}>
				<div>{list}</div>

				{/* {
				
					list.map((el) => {
						<Card 	
							id={el.id}
							key={el.id} 
							title={el.title} 
							rating={el.rating} 
							img={el.img} 	
						/>;
					})
				} */}
			</div>
		</div>
	);
};

export default Favorites;