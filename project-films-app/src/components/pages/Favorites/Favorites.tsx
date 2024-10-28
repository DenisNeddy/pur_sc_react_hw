import Search from '../../Search/Search.tsx';
import styles from './Favorites.module.css';
const Favorites = () => {
	return (
		<div className={styles['favorites-page']}>
			<Search />
		</div>
	);
};

export default Favorites;