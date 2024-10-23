import { createContext, ReactNode, useState} from 'react';

export interface UserContextProviderProps {
	children: ReactNode
}

export interface UserProps {
	name: string,
	isLogined: boolean
}

export const UserContext = createContext({
	

});


export const UserContextProvider = ({children}: UserContextProviderProps) => {
	const [usersState,setUsersState] = useState<UserProps[]>();

	return <UserContext.Provider value={{usersState,setUsersState}}>
		{children}
	      </UserContext.Provider>;
};