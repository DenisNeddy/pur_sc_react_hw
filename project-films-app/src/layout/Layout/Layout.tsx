import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {

	return (
		<>
			<div>
				<Header />
			</div>
			<div>
				<div className="container">
					<Outlet/>
				</div>
			</div>
		</>
	);
};

export default Layout;