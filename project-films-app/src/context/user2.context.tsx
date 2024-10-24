

import  { useState, createContext, ReactNode } from 'react';


export interface UserContextProviderProps {
	children: ReactNode
}

interface Item {
	id: number;
    name: string;
}

interface MyContextType {
	items: Item[];
    addItem: (item: Item) => void;
}
const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: UserContextProviderProps) => {
	const [items, setItems] = useState<Item[]>([]);

	const addItem = (item: Item) => {
		setItems((prevItems: Item[]) => [...prevItems, item]);
	};

	return (
		<MyContext.Provider value={{ items, addItem }}>
			{children}
		</MyContext.Provider>
	);
};