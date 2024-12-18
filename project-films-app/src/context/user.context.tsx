
import { createContext, ReactNode, useState } from 'react';

export interface UserContextProviderProps {
	children: ReactNode
}

export interface ListItem {
	'#IMDB_ID': string,
	'#IMG_POSTER': string,
	'#TITLE': string,
	'#RANK': number,
}

const INITIAL_LIST: ListItem[] = [
	{
		'#IMDB_ID': '1',
		'#IMG_POSTER': 'image_black_widow.png', 
		'#TITLE': 'Black Widow',
		'#RANK': 324	
	},
	{   
		'#IMDB_ID': '2',
		'#IMG_POSTER': 'image_shang_chi.jpg', 
		'#TITLE': 'Shang Chi',
		'#RANK': 124
	},
	{   
		'#IMDB_ID': '3',
		'#IMG_POSTER': 'image_loki.png', 
		'#TITLE': 'Loki',
		'#RANK': 235
	},
	{   
		'#IMDB_ID': '4',
		'#IMG_POSTER': 'image_friends.png', 
		'#TITLE': 'Friends',
		'#RANK': 2135
	}
];

export interface MyContextType {
	
	filmsState: ListItem[],
	changeFilms: (item: ListItem[] | ListItem ) => void
}

export interface ListContextType {
	films: ListItem[],
}

export const UserContext = createContext<MyContextType | undefined>(undefined);

export const UserContextProvider = ({children}: UserContextProviderProps) => {
	const [filmsState, setFilmsState] = useState<ListItem[]>(INITIAL_LIST);
	const changeFilms = (item: ListItem | ListItem[]) => {
		if(Array.isArray(item)) {
			setFilmsState(item);
		} else {
			setFilmsState(prevItems => [...prevItems, item]);
		}
	};

	return (
		<UserContext.Provider value={{  filmsState, changeFilms }}>
			{children}
	    </UserContext.Provider>

		
		  );
};


