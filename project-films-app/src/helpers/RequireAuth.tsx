import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}: {children: ReactNode}) => {
	const user = localStorage.getItem('userData') || '';
	if(!user) {
		return <Navigate to="auth" replace />;
	}
	return children;
};

export default RequireAuth;