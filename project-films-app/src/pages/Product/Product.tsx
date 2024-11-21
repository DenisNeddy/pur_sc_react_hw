/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Product.module.css';

import { useLoaderData } from 'react-router-dom';
import ProductCardInner from '../../components/ProductInner/ProductCardInner.tsx';
import { CardProps } from '../../components/Card/Card.props.ts';
import Review from '../../components/Review/Review.tsx';

const Product = () => {
	const data = useLoaderData() as any;
	
	const element: CardProps = {
		id: data.imdbId,
		img: data.short.image,
		title: data.short.name,
		rating: data.short.aggregateRating.ratingCount
	};

	console.log(data.short.review, 'review');

	return (
		<>
			{ data ?
				<div className={styles['product-page']}>
					<ProductCardInner element={element} data={data} />
					<Review data={data} />
				</div>
				: 'Ничего нет'
			}
		</>
	);
};

export default Product;