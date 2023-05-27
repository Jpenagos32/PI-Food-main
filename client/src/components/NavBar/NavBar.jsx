import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
	return (
		<div className={styles.container}>
			<button>Soy</button>
			<button>NavBar</button>
			<SearchBar />
		</div>
	);
};
export default NavBar;
