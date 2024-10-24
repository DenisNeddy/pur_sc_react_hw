import { useState } from 'react';
import styles from './FavoriteLink.module.css';
import { FavoriteLinkProps } from './FavoriteLing.props';
import cn from 'classnames';

const FavoriteLink = ({ className, onClick, favorite,  ...props}: FavoriteLinkProps) => {
	const [fav, setFav] = useState<boolean>(favorite);
	
	const changeFavorite = () =>  {
		setFav(fav => !fav);
		onClick();
	};

	return (
		<button className={className ? className + ` ${styles['favorite-link']}` : className} onClick={changeFavorite} {...props}>
			{fav ? <img src="bookmark.svg"/> : <img src="like.svg"/>}
			{fav ? <span className={cn('favorite-link__text', 'favorite-link__text--active')}>В избраном</span> : <span className={styles['favorite-link__text']}>В избранное</span>}
		</button>
	);
};

export default FavoriteLink;