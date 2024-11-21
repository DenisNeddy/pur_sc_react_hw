import styles from './Paragraph.module.css';
import {ParagraphProps} from './Paragraph.props';
import cn from 'classnames';

const Paragraph = ({className, size = 16,children}: ParagraphProps) => {
	return (
		<p style={{'fontSize': size}} className={cn(styles['paragraph'], className)}>
			{children}
		</p>
	);
};

export default Paragraph;