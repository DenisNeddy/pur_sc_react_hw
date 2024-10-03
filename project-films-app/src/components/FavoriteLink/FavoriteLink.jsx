import { useState } from 'react';
import './FavoriteLink.css';

const FavoriteLink = ({className, onClick, favorite,  ...props}) => {
	const [fav, setFav] = useState(favorite);
	
	const changeFavorite = () =>  {
		setFav(fav => !fav);
		onClick();
	};

	return (
		<button className={className ? className + ' favorite-link' : className} onClick={changeFavorite} {...props}>
			{fav ? <img src="bookmark.svg"/> : <img src="like.svg"/>}
			{fav ? <span className="favorite-link__text favorite-link__text--active">В избраном</span> : <span className="favorite-link__text">В избранное</span>}
		</button>
	);
};

export default FavoriteLink;