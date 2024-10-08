import RatingTag from '../RatingTag/RatingTag.jsx';
import FavoriteLink from '../FavoriteLink/FavoriteLink.jsx';
import styles from './Card.module.css';

const Card = ({ img, title, rating, onClick, favorite}) => {

	const style = {
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
				<FavoriteLink  className={styles['card__favorite']} favorite={favorite} onClick={onClick} text="В избранное" />
			</div>
		</div>
	);
};

export default Card;