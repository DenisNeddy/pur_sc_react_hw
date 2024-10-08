import styles from './Paragraph.module.css';
const Paragraph = ({size = 16,children}) => {
	return (
		<p style={{'fontSize': size}} className={styles['paragraph']}>
			{children}
		</p>
	);
};

export default Paragraph;