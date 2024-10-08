import styles from './LinkCounter.module.css';

const LinkCounter = ({children, className = ''}) => {
	return (
		<div className={className ? `${styles['link-counter']} ` + className : `${styles['link-counter']}` }>
			{children}
		</div>
	);
};

export default LinkCounter;