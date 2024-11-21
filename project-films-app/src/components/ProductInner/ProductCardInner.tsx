import styles from './ProductCardInner.module.css';
import RatingTag from '../RatingTag/RatingTag';
import FavoriteLink from '../FavoriteLink/FavoriteLink';
import parseDuration from '../../helpers/utils';
import { ProductCardInnerProps } from './ProductCardInner.props';

const ProductCardInner = ({ data, element }: ProductCardInnerProps) => {
	return (
		<div className={styles['product']}>
			<div className={styles['product__header']}>
				<p className={styles['product__header-tag']}>Поиск фильмов</p>
				<h2 className={styles['product__header-title']}>{data.short.name}</h2>
			</div>
			<div className={styles['product__content']}>
				<div className={styles['product__picture']}>
					<img src={`${data.short.image}`} alt={data.short.name} />
				</div>
				<div className={styles['product__data']}>
					<p className={styles['product__data-description']}>
						{data.short.description}
					</p>
					<div className={styles['product__rating-wrap']}>
						<RatingTag rating={data.short.aggregateRating.ratingCount} />
						<FavoriteLink elementData={element} text="В избранное" />
					</div>
					<table className={styles['product__data-table']}>
						<tbody className={styles['product__data-content']}>
							<tr className={styles['product__data-table-row']}>
								<th className={styles['product__data_table-header']}>Тип</th>
								<td className={styles['product__data-table-text']}>{data.short['@type']}</td>
							</tr>
							<tr className={styles['product__data-table-row']}>
								<th className={styles['product__data_table-header']}>Дата выхода</th>
								<td className={styles['product__data-table-text']}>{data.short.datePublished}</td>
							</tr>
							<tr className={styles['product__data-table-row']}>
								<th className={styles['product__data_table-header']}>Длительность</th>
								<td className={styles['product__data-table-text']}>{`${parseDuration(data.short.duration) | 0} мин`}</td>
							</tr>
							<tr className={styles['product__data-table-row']}>
								<th className={styles['product__data_table-header']}>Жанр</th>
								<td className={styles['product__data-table-text']}>{data.short.genre.join(', ')}</td>
							</tr> 
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ProductCardInner;