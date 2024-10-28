
import { useContext } from 'react';
import Card from '../Card/Card.js';
import styles from './CardsList.module.css';
import { UserContext } from '../../context/user.context.js';

const CardsList = () => {
	// const [data, setData] = useState<ListItem[]>(INITIAL_DATA);
	// const toggleFavorite = (id: number): void => {
	// 	const newData: ListItem[] = INITIAL_DATA || [];
	// 	if(newData.find((el:ListItem) => el.id === id)?.favorite !== null) {
	// 		newData.find((el:ListItem) => el!.id === id)!.favorite = !newData.find((el:ListItem) => el?.id === id)?.favorite; // Вопрос по этой строчке, пришлось ставить ! Стобы ts пропустил
	// 	}
	// 	setData(newData);
	// };

	const context = useContext(UserContext);

	if (!context) {
		throw new Error('MyComponent must be used within a MyProvider');
	}

	const { filmsState } = context;

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