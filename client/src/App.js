// import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {
	/* 
  ! Esta es la funcion que cambia entre dark y light
	const [darkMode, setDarkMode] = useState(false);

	const darkModeHandler = () => {
		setDarkMode(!darkMode);
	};
 */

	const location = useLocation();
	return (
		<div className='lightMode'>
			{/*<button onClick={darkModeHandler}>Toggle Dark Mode</button> */}

			{location.pathname !== '/' && <NavBar />}

			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
