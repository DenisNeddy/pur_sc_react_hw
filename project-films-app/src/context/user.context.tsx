import { createContext, ReactNode, useState} from 'react';

export interface UserContextProviderProps {
	children: ReactNode
}

export interface UserProps {
	name: string,
	isLogined: boolean
}

export interface MyContextType {
	usersState: UserProps[],
	addItem: (item: UserProps) => void,
	startList: (item: UserProps[]) => void
}

export const UserContext = createContext<MyContextType | undefined>(undefined);


export const UserContextProvider = ({children}: UserContextProviderProps) => {
	const [usersState,setUsersState] = useState<UserProps[]>([]);

	const addItem = (item: UserProps) => {
		setUsersState((prevItems) => [...prevItems, item]);
	};
	const startList = (item: UserProps[]) => {
		setUsersState(item);
	};

	return (<UserContext.Provider value={{usersState,addItem, startList}}>
		{children}
	      </UserContext.Provider>);
};


