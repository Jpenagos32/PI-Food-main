// import { useState } from 'react';
import {
	Route,
	Routes,
} from 'react-router-dom/dist/umd/react-router-dom.development';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './images/HomePage/HomePage';

function App() {
	/* 
  ! Esta es la funcion que cambia entre dark y light
	const [darkMode, setDarkMode] = useState(false);

	const darkModeHandler = () => {
		setDarkMode(!darkMode);
	};
 */
	return (
		<div>
			{/*<button onClick={darkModeHandler}>Toggle Dark Mode</button> */}
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
