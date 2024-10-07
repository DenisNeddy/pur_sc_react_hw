import './RatingTag.css';

const RatingTag = ({rating}) => {
	return (
		<div className="rating-tag">
			<div className="rating-tag-wrapper">
				<div className="rating-tag__content">
					<div className="rating-tag__icon-wrapper">
						<img src="/rating_star.svg" />
					</div>
					<div className="rating-tag__counter">{rating}</div>
				</div>
			</div>
		</div>
	);
};

export default RatingTag;