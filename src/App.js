import './App.css';
import './style.css';
import Voting from './Voting';
import Gallery from './Gallery';
import Breeds from './Breeds';
import Left from './Left';
import Home from './Home';
import Breed from './Breed';
import Search from './Search';
import Favourites from './Favourites';
import Likes from './Likes';
import Dislikes from './Dislikes';
import DefaultState from './DefaultState';
import LoadingState from './LoadingState';

function App() {
	return (
		<div className="container">
			<div></div>
			<Left />
			<Voting />
		</div>
	);
};

export default App;
