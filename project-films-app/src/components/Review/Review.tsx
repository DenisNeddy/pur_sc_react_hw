import styles from './Review.module.css';
import { ReviewProps } from './Review.props';

const Review = ({data}: ReviewProps) => {
    
	return (
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
	);
};

export default Review;