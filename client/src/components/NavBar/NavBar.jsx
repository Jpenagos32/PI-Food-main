import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import {
	filterByDiet,
	orderByHealthScore,
	orderByName,
} from '../../Redux/actions';

const NavBar = (props) => {
	const dispatch = useDispatch();

	const handleFilter = (event) => {
		dispatch(filterByDiet(event.target.value));
	};

	const handleOrder = (event) => {
		dispatch(orderByName(event.target.value));
	};

	const handleOrderHealthScore = (event) => {
		dispatch(orderByHealthScore(event.target.value));
	};
	return (
		<div className={styles.container}>
			<button>Soy</button>
			<button>NavBar</button>

			<div className={styles.filterSelect}>
				<label htmlFor='filterSelect'>Filter By Diets</label>
				<select onChange={handleFilter} name='filter' id='filterSelect'>
					<option selected disabled>
						--Select--
					</option>
					<option value='NF'>No Filter</option>
					<option value='gluten free'>Gluten Free</option>
					<option value='dairy free'>Dairy Free</option>
					<option value='lacto ovo vegetarian'>
						Lacto Ovo Vegetarian
					</option>
					<option value='vegan'>Vegan</option>
					<option value='paleolithic'>Paleolithic</option>
					<option value='primal'>Primal</option>
					<option value='whole 30'>Whole 30</option>
					<option value='pescatarian'>Pescatarian</option>
					<option value='ketogenic'>Ketogenic</option>
					<option value='fodmap friendly'>Fodmap Friendly</option>
				</select>
			</div>

			<div className={styles.origin}>
				<label htmlFor='origin'>Order By Origin</label>
				<select name='origin' id='origin'>
					<option selected disabled>
						--Select--
					</option>
					<option value='API'>API</option>
					<option value='DB'>Data Base</option>
				</select>
			</div>

			<div className={styles.orderSelect}>
				<label htmlFor='orderSelect'>Order By Name</label>
				<select
					onChange={handleOrder}
					name='orderSelect'
					id='orderSelect'
				>
					<option selected disabled>
						--Select--
					</option>
					<option value='N'>None</option>
					<option value='A'>A - Z</option>
					<option value='D'>Z - A</option>
				</select>
			</div>

			<div>
				<label htmlFor='orderHealthScore'>Order By Health Score</label>
				<select
					onChange={handleOrderHealthScore}
					name='orderHealthScore'
					id='orderHealthScore'
				>
					<option disabled selected>
						--Select--
					</option>
					<option value='N'>None</option>
					<option value='A'>0 - 100</option>
					<option value='D'>100 - 0</option>
				</select>
			</div>

			<SearchBar />
		</div>
	);
};
export default NavBar;
