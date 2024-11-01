import RatingTag from '../RatingTag/RatingTag.tsx';
import FavoriteLink from '../FavoriteLink/FavoriteLink.tsx';
import styles from './Card.module.css';
import { CardProps, CardPropsStyle } from './Card.props.ts';
import { Link } from 'react-router-dom';

const Card = ({ id, img, title, rating, favorite }: CardProps) => {

	const style: CardPropsStyle = {
		backgroundImage: `url(${img})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: '98% auto'
	};

	console.log(favorite, 'card');
	return (
		<div className={styles.card} style={style}>
			<div className={styles['card__wrap']}>

				<Link to={`/product/${id}`}>
					<div className={styles['card__content']}>
						<h2 className={styles['card__title']}>{title}</h2>
						<div className={styles['card__image']}>
							<img src={img} alt={title} />
						</div>
						<div className={styles['card__rating']}>
							<RatingTag rating={rating} />
						</div>
					</div>
				</Link>
				<FavoriteLink  
					className={styles['card__favorite']} 
					favorite={favorite} 
					text="В избранное" 
				/>
			</div>
		</div>
	);
};

export default Card;