
import { useState } from 'react';
import Card from '../Card/Card.jsx';
import './CardsList.css';

// const INITIAL_DATA = [
// 	{
// 		id: 1,
// 		img: 'image_black_widow.png', 
// 		title: 'Black Widow',
// 		rating: 324,
// 		favorite: false
// 	},
// 	{
// 		id: 2,
// 		img: 'image_shang_chi.jpg', 
// 		title: 'Shang Chi',
// 		rating: 124,
// 		favorite: false
// 	},
// 	{
// 		id: 3,
// 		img: 'image_loki.png',
// 		title: 'Loki',
// 		rating: 235,
// 		favorite: false
// 	},
// 	{
// 		id: 4,
// 		img: 'image_how_i_met_your_mother.png',
// 		title: 'How I Met Your Mother',
// 		rating: 123,
// 		favorite: false

// 	},
// 	{
// 		id: 5,
// 		img: 'image_money_heist.png',
// 		title: 'Money Heist',
// 		rating: 8125,
// 		favorite: false
// 	},
// 	{
// 		id: 6,
// 		img: 'image_friends.png',
// 		title: 'Friends',
// 		rating: 123,
// 		favorite: false
// 	},
// 	{
// 		id: 7,
// 		img: 'image_the_big_bang_theory.png',
// 		title: 'The Big Bang Theory',
// 		rating: 12,
// 		favorite: false
// 	},
// 	{
// 		id: 8,
// 		img: 'image_two_and_a_half_men.png',
// 		title: 'Two And a Half Men',
// 	    rating: 456,
// 		favorite: false
// 	}
	
// ];


const user = [{
	id: 1,
	img: 'image_black_widow.png', 
	title: 'Black Widow',
	rating: 324,
	favorite: false
},
{
	id: 8,
	img: 'image_two_and_a_half_men.png',
	title: 'Two And a Half Men',
		    rating: 456,
	favorite: false
}
];



const CardsList = () => {
	let [data, setData] = useState(user);

	// const toggleFavorite = (item) => {
	// 	setData(oldData => [...oldData, 	{
	// 		...item,
	// 		favorite: true
		
	// 	}]
			
	// 	);
	// };

	const toggleFavorite = (id) => {
		console.log(id);
        
		let newData = [...data];
		// newData = {...newData, favorite: newData.favorite ? true: false};
		newData.find(el => el.id === id).favorite = !newData.find(el => el.id === id).favorite;
		
		setData(newData);

		

	
		

		
		
	};
	console.log(data, 'Пизда');
	return (
		<>
			{/* <div>{data[0]}</div> */}
			<div className="cards-list">
			
				{data.map(el => (
					<Card 
						key={el.id} 
						
						title={el.title} 
						rating={el.rating} 
						img={el.img} 
						favorite={el.favorite}
						onClick={() => toggleFavorite(el.id)}
					/>
				))} 

			</div>
			{/* <button onClick={test}>Что то тут</button> */}
		</>
	
	);
};

export default CardsList;