
import './App.css';
import CardList from './components/CardsList/CardsList.jsx';
// import LoginProfile from './components/LoginProfile/LoginProfile.jsx';

import Search from './components/Search/Search.jsx';
import Header from './Header/Header.jsx';

function App() {
	
	return (
		<>   <Header />
			<div className="container app__layout">
				<Search />
				<CardList />
			</div>
		</>
	);
}

export default App;
