import RatingTag from '../RatingTag/RatingTag.jsx';
import FavoriteLink from '../FavoriteLink/FavoriteLink.jsx';
// import { useState } from 'react';
import './Card.css';

const Card = ({ img, title, rating, onClick, favorite}) => {

	const style = {
		backgroundImage: `url(${img})`,
		backgroundReapet: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	};

	// const [, setFavorite] = useState(favorite);

	return (
		<div className="card" style={style}>
			<div className="card__content">
				<h2 className="card__title">{title}</h2>
				<div className="card__image">
					<img src={img} alt={title} />
				</div>
				<div className="card__rating">
					<RatingTag rating={rating} />
				</div>
				{/* <div>В избранное</div> */}
				{/* <button >В избранное </button> */}
				<FavoriteLink  className="card__favorite" favorite={favorite} onClick={onClick} text="В избранное" />
			</div>
		</div>
	);
};

export default Card;