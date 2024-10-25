import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

const Paragraph = ({size = 16,children}: ParagraphProps) => {
	return (
		<p style={{'fontSize': size}} className={styles['paragraph']}>
			{children}
		</p>
	);
};

export default Paragraph;