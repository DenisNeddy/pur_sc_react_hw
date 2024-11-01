import Card from '../Card/Card.js';
import styles from './CardsList.module.css';
import { useUserContext } from '../../helpers/userContext.js';

const CardsList = () => {
	const { filmsState } = useUserContext();

	return (
		<>  
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
			</div>
		</>
	);
};

export default CardsList;