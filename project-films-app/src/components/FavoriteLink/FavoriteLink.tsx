import { MouseEvent,  useState } from 'react';
import styles from './FavoriteLink.module.css';
import { FavoriteLinkProps } from './FavoriteLink.props';
import cn from 'classnames';

const FavoriteLink = ({ className,   ...props}: FavoriteLinkProps) => {
	const [fav, setFav] = useState<boolean>(false);

	const changeFavorite = (e:MouseEvent) =>  {
		e.stopPropagation();
		setFav(fav => !fav);
	};

	return (
		<button className={cn(styles['favorite-link'], className)} onClick={changeFavorite} {...props}>
			{fav ? <img src="/bookmark.svg"/> : <img src="/like.svg"/>}
			{fav ? <span className={cn(styles['favorite-link__text'], styles['favorite-link__text--active'])}>В избраном</span> : <span className={styles['favorite-link__text']}>В избранное</span>}
		</button>
	);
};

export default FavoriteLink;