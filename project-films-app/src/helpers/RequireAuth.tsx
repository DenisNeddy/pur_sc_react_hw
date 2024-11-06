import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}: {children: ReactNode}) => {
	const name = localStorage.getItem('user');
	if(!name) {
		return <Navigate to="auth" replace />;
	}
	return children;
};

export default RequireAuth;