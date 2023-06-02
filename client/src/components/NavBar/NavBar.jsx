import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterByDiet,
	getDiets,
	orderByHealthScore,
	orderByName,
} from '../../Redux/actions';
import { useLoadOnGlblState } from '../../hooks/personalizedHooks';

const NavBar = (props) => {
	const dispatch = useDispatch();

	// Hook personalizado
	const diets = useLoadOnGlblState('allDiets', getDiets);

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
				<select
					defaultValue='--Select--'
					onChange={handleFilter}
					name='filter'
					id='filterSelect'
				>
					<option disabled>--Select--</option>
					<option value='NF'>No Filter</option>
					{diets?.map((diet) => {
						return <option value={diet}>{diet}</option>;
					})}
				</select>
			</div>

			<div className={styles.origin}>
				<label htmlFor='origin'>Order By Origin</label>
				<select name='origin' id='origin' defaultValue='--Select--'>
					<option disabled>--Select--</option>
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
					defaultValue='--Select--'
				>
					<option disabled>--Select--</option>
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
					defaultValue='--Select--'
				>
					<option disabled>--Select--</option>
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
