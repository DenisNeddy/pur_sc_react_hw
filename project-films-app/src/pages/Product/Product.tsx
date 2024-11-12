/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Product.module.css';
import RatingTag from '../../components/RatingTag/RatingTag.tsx';
import FavoriteLink from '../../components/FavoriteLink/FavoriteLink.tsx';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
	const data = useLoaderData() as any;
	function parseDuration(duration: string): number {
		const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?$/;
		const matches = duration.match(regex);
		if (!matches) {
			throw new Error('Invalid duration format');
		}
		const hours = matches[1] ? parseInt(matches[1], 10) : 0;
		const minutes = matches[2] ? parseInt(matches[2], 10) : 0;

		return hours * 60 + minutes;
	}
	const element = {
		id: data.imdbId,
		img: data.short.image,
		title: data.short.name,
		rating: data.short.aggregateRating.ratingCount
	};

	return (
		<>
			{ data ?
				<div className={styles['product-page']}>
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
					<div className={styles['reviews']}>
						<h2 className={styles['reviews__title']}>Отзывы</h2>
						<ul className={styles['reviews__list']}>
							<li className={styles['reviews__item']}>
								<div className={styles['review']}>
									<div className={styles['review__header']}>
										<h3 className={styles['review__title']}>
											{data.short.review.name}
										</h3>
										<p className={styles['review__date']}>{data.short.review.dateCreated}</p>
									</div>
									<p className={styles['review__text']}>
										{data.short.review.reviewBody}
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				: 'Ничего нет'
			}
		</>
	);
};

export default Product;