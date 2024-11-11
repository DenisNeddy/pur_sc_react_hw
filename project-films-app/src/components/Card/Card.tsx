import RatingTag from '../RatingTag/RatingTag.tsx';
import FavoriteLink from '../FavoriteLink/FavoriteLink.tsx';
import styles from './Card.module.css';
import { CardProps, CardPropsStyle } from './Card.props.ts';
import { Link } from 'react-router-dom';

const Card = (props: CardProps) => {

	const style: CardPropsStyle = {
		backgroundImage: `url(${props.img})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: '98% auto'
	};

	return (
		<div className={styles.card} style={style}>
			<div className={styles['card__wrap']}>

				<Link to={`/product/${props.id}`}>
					<div className={styles['card__content']}>
						<h2 className={styles['card__title']}>{props.title}</h2>
						<div className={styles['card__image']}>
							<img src={props.img} alt={props.title} />
						</div>
						<div className={styles['card__rating']}>
							<RatingTag rating={props.rating} />
						</div>
					</div>
				</Link>
				<FavoriteLink  
					elementData={props}
					className={styles['card__favorite']} 					 
					text="В избранное" 
				/>
			</div>
		</div>
	);
};

export default Card;