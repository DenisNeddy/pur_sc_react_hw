import RatingTag from '../RatingTag/RatingTag.tsx';
import FavoriteLink from '../FavoriteLink/FavoriteLink.tsx';
import styles from './Card.module.css';
import { CardProps, CardPropsStyle } from './Card.props.ts';

const Card = ({ img, title, rating, onClick, favorite }: CardProps) => {

	const style: CardPropsStyle = {
		backgroundImage: `url(${img})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: '98% auto'
	};

	return (
		<div className={styles.card} style={style}>
			<div className={styles['card__content']}>
				<h2 className={styles['card__title']}>{title}</h2>
				<div className={styles['card__image']}>
					<img src={img} alt={title} />
				</div>
				<div className={styles['card__rating']}>
					<RatingTag rating={rating} />
				</div>
				<FavoriteLink  
					className={styles['card__favorite']} 
					favorite={favorite} 
					onClick={onClick} 
					text="В избранное" 
				/>
			</div>
		</div>
	);
};

export default Card;