import styles from './SearchBar.module.css';

const SearchBar = (props) => {
	return (
		<div>
			<input type='search' className={styles.searchBar} />
			<button>Buscar</button>
		</div>
	);
};
export default SearchBar;
