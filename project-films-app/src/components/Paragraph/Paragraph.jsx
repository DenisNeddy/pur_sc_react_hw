import './Paragraph.css';
const Paragraph = ({size = 16,children}) => {
	return (
		<p style={{'font-size': size}}className="paragraph">
			{children}
		</p>
	);
};

export default Paragraph;