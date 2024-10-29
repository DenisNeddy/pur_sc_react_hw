
import { createContext, ReactNode, useState } from 'react';


export interface UserContextProviderProps {
	children: ReactNode
}

export interface UserProps {
	name: string,
	isLogined: boolean,
}

export interface ListItem {
	id: number,
	img: string,
	title: string,
	rating: number,
	favorite: boolean,
	typeFilm: string,
	date: string,
	duration: number,
	genre: string[],
	description: string
	
}

const INITIAL_LIST: ListItem[] = [
	{
		id: 1,
		img: 'image_black_widow.png', 
		title: 'Black Widow',
		rating: 324,
		favorite: false,
		typeFilm: 'Movie',
		date: '2019-04-24',
		duration: 181,
		genre: ['Adventure', 'Science Fiction', 'Action'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'


	},
	{
		id: 2,
		img: 'image_shang_chi.jpg', 
		title: 'Shang Chi',
		rating: 124,
		favorite: false,
		typeFilm: 'Movie',
		date: '2023-11-14',
		duration: 200,
		genre: ['Adventure, Action', 'Fantasy', 'Chiniese'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
	},
	{
		id: 3,
		img: 'image_loki.png',
		title: 'Loki',
		rating: 235,
		favorite: false,
		typeFilm: 'Movie',
		date: '2022-02-24',
		duration: 176,
		genre: ['Adventure', 'Science Fiction', 'Action'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
	},
	{
		id: 4,
		img: 'image_how_i_met_your_mother.png',
		title: 'How I Met Your Mother',
		rating: 123,
		favorite: false,
		typeFilm: 'Movie',
		date: '2017-08-04',
		duration: 222,
		genre: ['Adventure, Comedy'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'

	},
	{
		id: 5,
		img: 'image_money_heist.png',
		title: 'Money Heist',
		rating: 8125,
		favorite: false,
		typeFilm: 'Movie',
		date: '2019-04-24',
		duration: 231,
		genre: ['Science Fiction', 'Action'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
	},
	{
		id: 6,
		img: 'image_friends.png',
		title: 'Friends',
		rating: 123,
		favorite: false,
		typeFilm: 'Series',
		date: '2023-03-25',
		duration: 250,
		genre: ['Comedy'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
	},
	{
		id: 7,
		img: 'image_the_big_bang_theory.png',
		title: 'The Big Bang Theory',
		rating: 12,
		favorite: false,
		typeFilm: 'Series',
		date: '2021-12-31',
		duration: 210,
		genre: ['Comedy','Science'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
	},
	{
		id: 8,
		img: 'image_two_and_a_half_men.png',
		title: 'Two And a Half Men',
	    rating: 456,
		favorite: false,
		typeFilm: 'Series',
		date: '2015-03-28',
		duration: 231,
		genre: ['Adventure', 'Comedy'],
		description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
	}
	
];

export interface MyContextType {
	usersState: UserProps[],
	addItem: (item: UserProps) => void,
	changeList: (item: UserProps[]) => void,
	filmsState: ListItem[],
	changeFilms: (item: ListItem[] | ListItem ) => void

}

export interface ListContextType {
	films: ListItem[],
	
}

export const UserContext = createContext<MyContextType | undefined>(undefined);
// export const FilmsContext = createContext<ListContextType | undefined>(undefined);

export const UserContextProvider = ({children}: UserContextProviderProps) => {
	const [usersState,setUsersState] = useState<UserProps[]>([]);
	const [filmsState, setFilmsState] = useState<ListItem[]>(INITIAL_LIST);
	const addItem = (item: UserProps) => {
		setUsersState((prevItems) => [...prevItems, item]);
	};
	const changeList = (item: UserProps[]) => {
		setUsersState(item);
	};

	const changeFilms = (item: ListItem | ListItem[]) => {
		if(Array.isArray(item)) {
			setFilmsState(item);
		} else {
			setFilmsState(prevItems => [...prevItems, item]);
		}
	};

	return (
		<UserContext.Provider value={{ usersState, addItem, changeList, filmsState, changeFilms }}>
			{children}
	    </UserContext.Provider>
		  );
};


