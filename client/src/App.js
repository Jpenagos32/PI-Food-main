// import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';

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
			<LandingPage />
		</div>
	);
}

export default App;
