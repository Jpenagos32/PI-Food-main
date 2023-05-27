import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
	return (
		<div>
			<SearchBar />
			<div>
				<a href='#'>soy</a>
				<a href='#'>NavBar</a>
			</div>
		</div>
	);
};
export default NavBar;
