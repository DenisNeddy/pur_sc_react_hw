 

import {CardProps} from '../../components/Card/Card.props.ts';
import Title from '../../components/Title/Title.tsx';
import styles from './Favorites.module.css';
import Card from '../../components/Card/Card.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';

const Favorites = () => {
	const list = useSelector((s: RootState) => s.user.profile.favorites);
	
	return (
		<div className={styles['favorites-page']}>
			<Title>Избранное</Title>
			<div className={styles['favorites__list']}>
				{
					list.map((el: CardProps) => (
						<Card 	
							id={el.id}
							key={el.id} 
							title={el.title} 
							rating={el.rating} 
							img={el.img} 	
						/>
					))
				}
			</div>
		</div>
	);
};

export default Favorites;