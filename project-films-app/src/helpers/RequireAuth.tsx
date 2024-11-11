import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}: {children: ReactNode}) => {
	const user = localStorage.getItem('userData') || '';
	if(!user) {
		console.log('ЙОБА');
		return <Navigate to="auth" replace />;
	}
	console.log('ХУЙОБА');
	return children;
};

export default RequireAuth;