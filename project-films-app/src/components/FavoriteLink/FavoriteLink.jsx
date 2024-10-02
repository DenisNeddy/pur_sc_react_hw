import { useState } from 'react';
import './FavoriteLink.css';

const FavoriteLink = ({onClick, text, favorite,  ...props}) => {
	const [fav, setFav] = useState(favorite);
	
	const toggleFavorite = () =>  {
		setFav(fav => !fav);
		onClick();
	};


	return (
		<button onClick={toggleFavorite} {...props}>
			{fav ? <p>Фак ЮЮ</p> : ''}
			{text}
		</button>
	);
};

export default FavoriteLink;