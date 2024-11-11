import { MouseEvent,  useState } from 'react';
import styles from './FavoriteLink.module.css';
import { FavoriteLinkProps } from './FavoriteLink.props';
import cn from 'classnames';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { favoriteActions } from '../../store/favorite.slice';

const FavoriteLink = ({ className, elementData, ...props}: FavoriteLinkProps) => {
	const [fav, setFav] = useState<boolean>(false);

	const dispatch = useDispatch<AppDispatch>();

	const changeFavorite = (e:MouseEvent) =>  {
		e.stopPropagation();

		if(!fav) {
			dispatch(favoriteActions.addFavoriteFilm(elementData));
		} else {
			dispatch(favoriteActions.removeFavoriteFilm(elementData));
		}
		setFav(fav => !fav);
		console.log(elementData, 'бля');
	};


	return (
		<button className={cn(styles['favorite-link'], className)} onClick={changeFavorite} {...props}>
			{fav ? <img src="/bookmark.svg"/> : <img src="/like.svg"/>}
			{fav ? <span className={cn(styles['favorite-link__text'], styles['favorite-link__text--active'])}>В избраном</span> : <span className={styles['favorite-link__text']}>В избранное</span>}
		</button>
	);
};

export default FavoriteLink;