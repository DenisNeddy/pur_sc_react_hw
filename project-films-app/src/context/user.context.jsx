import { createContext, useState} from 'react';

export const UserContext = createContext([]);

export const UserContextProvider = ({children}) => {
	const [usersState,setUsersState] = useState([]);

	return <UserContext.Provider value={ {usersState,setUsersState} }>
		{children}
	      </UserContext.Provider>;
};