import Card from '../Card/Card.js';
import styles from './CardsList.module.css';
import { ListItem } from '../../context/user.context.js';
import { CardListProps } from './CardsList.props.js';

const CardsList = ( {films}: CardListProps) => {
	return (
		<div className={styles['cards-list']}>
			{films.map((el: ListItem) => (
				<Card 	
					id={el['#IMDB_ID']}
					key={el['#IMDB_ID']} 
					title={el['#TITLE']} 
					rating={el['#RANK']} 
					img={el['#IMG_POSTER']} 	
				/>
			))} 
		</div>
	);
};

export default CardsList;