/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useParams } from 'react-router-dom';
// import styles from './Product.module.css';
// import RatingTag from '../../RatingTag/RatingTag.tsx';
// import FavoriteLink from '../../FavoriteLink/FavoriteLink.tsx';
// import { useUserContext } from '../../../helpers/userContext.tsx';
import { useLoaderData } from 'react-router-dom';
import Title from '../../Title/Title';

const Product = () => {
	// const {id} = useParams();
	const data = useLoaderData() as any;

	// const {filmsState} = useUserContext();
	
	// const product = filmsState.find(el => el.id === Number(id));
	return (
		<>
			<Title>Продукт с ID={data.imdbId}</Title>
			{/* { product ?
				<div className={styles['product-page']}>
					<div className={styles['product']}>
						<div className={styles['product__header']}>
							<p className={styles['product__header-tag']}>Поиск фильмов</p>
							<h2 className={styles['product__header-title']}>{product.title}</h2>
						</div>
						<div className={styles['product__content']}>
							<div className={styles['product__picture']}>
								<img src={`/${product.img}`} alt={product.title} />
							</div>
							<div className={styles['product__data']}>
								<p className={styles['product__data-description']}>
									{product.description}
								</p>
								<div className={styles['product__rating-wrap']}>
									<RatingTag rating={product.rating} />
									<FavoriteLink favorite={product.favorite} text="В избранное" />
								</div>
								<table className={styles['product__data-table']}>
									<tr className={styles['product__data-table-row']}>
										<th className={styles['product__data_table-header']}>Тип</th>
										<td className={styles['product__data-table-text']}>{product.typeFilm}</td>
									</tr>
									<tr className={styles['product__data-table-row']}>
										<th className={styles['product__data_table-header']}>Дата выхода</th>
										<td className={styles['product__data-table-text']}>{product.date}</td>
									</tr>
									<tr className={styles['product__data-table-row']}>
										<th className={styles['product__data_table-header']}>Длительность</th>
										<td className={styles['product__data-table-text']}>{`${product.duration} мин`}</td>
									</tr>
									<tr className={styles['product__data-table-row']}>
										<th className={styles['product__data_table-header']}>Жанр</th>
										<td className={styles['product__data-table-text']}>{product.genre.join(', ')}</td>
									</tr>
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
                                        Not as good as infinity war..
										</h3>
										<p className={styles['review__date']}>2019-04-29</p>
									</div>
									<p className={styles['review__text']}>
                                            But its a pretty good film. A bit of a mess in some parts, 
                                            lacking the cohesive and effortless feel infinity war somehow 
                                            managed to accomplish. Some silly plot holes and characters 
                                            that could&apos;ve been cut (Ahem, captain marvel and thanos). 
                                            The use of Captain marvel in this film was just ridiculous. 
                                            Shes there at the start, bails for some reason? And then 
                                            pops up at the end to serve no purpose but deux ex machina 
                                            a space ship...
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				: 'Ничего нет'
			} */}
		</>
	);
};

export default Product;