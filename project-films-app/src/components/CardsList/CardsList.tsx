import Card from '../Card/Card.js';
import styles from './CardsList.module.css';
// import { useUserContext } from '../../helpers/userContext.js';
import { ListItem } from '../../context/user.context.js';
// import { CardListProps } from './CardsList.props.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardsList = ( {films}: any) => {


	return (
		<>  
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
		</>
	);
};

export default CardsList;