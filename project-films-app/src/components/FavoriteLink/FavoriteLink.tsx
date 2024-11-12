import {MouseEvent,useEffect,useState} from 'react';
import styles from './FavoriteLink.module.css';
import {FavoriteLinkProps} from './FavoriteLink.props';
import cn from 'classnames';
import {AppDispatch} from '../../store/store';
import {useDispatch} from 'react-redux';
import {userActions} from '../../store/user.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const FavoriteLink = ({ className, elementData, ...props}: FavoriteLinkProps) => {
	const [fav, setFav] = useState<boolean>(false);
	const dispatch = useDispatch<AppDispatch>();
	const favoritesList = useSelector((state: RootState) => state.user.profile.favorites);
	useEffect(() => {
		if(favoritesList.find(el => el.id === elementData.id)) {
			setFav(true);
		}
	}, [favoritesList, setFav,elementData]);
	const changeFavorite = (e:MouseEvent) =>  {
		e.stopPropagation();
		if(!fav) {
			dispatch(userActions.addFavoriteFilm(elementData));
		} else {
			dispatch(userActions.removeFavoriteFilm(elementData));
		}
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