import { createContext, useState } from 'react';

export const UserContext = createContext({
	userId: 1
});

export const UserContextProvider = ({children}) => {
	const [usersState,setUsersState] = useState(['хуй']);


	return <UserContext.Provider value={ {usersState, setUsersState} }>
		{children}
	      </UserContext.Provider>;
};