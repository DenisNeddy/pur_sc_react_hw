import styles from './RatingTag.module.css';

const RatingTag = ({rating}) => {
	return (
		<div className={styles['rating-tag']}>
			<div className={styles['rating-tag-wrapper']}>
				<div className={styles['rating-tag__content']}>
					<div className={styles['rating-tag__icon-wrapper']}>
						<img src="/rating_star.svg" />
					</div>
					<div className={styles['rating-tag__counter']}>{rating}</div>
				</div>
			</div>
		</div>
	);
};

export default RatingTag;