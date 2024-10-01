
import './App.css';
import LoginProfile from './components/LoginProfile/LoginProfile.jsx';

import Search from './components/Search/Search.jsx';
import Header from './Header/Header.jsx';

function App() {
	
	return (
		<>   <Header />
			<div className="container app__layout">
				
				<Search />
				<LoginProfile />
		
			</div>
		</>
	);
}

export default App;
