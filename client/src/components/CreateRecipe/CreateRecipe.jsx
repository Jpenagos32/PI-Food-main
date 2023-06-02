import styles from './CreateRecipe.module.css';
import { getDiets } from '../../Redux/actions';
import { useLoadOnGlblState } from '../../hooks/personalizedHooks';
import { Link } from 'react-router-dom';

const CreateRecipe = (props) => {
	// Hook personalizado
	const diets = useLoadOnGlblState('allDiets', getDiets);

	return (
		<div>
			<div className='invisible'></div>
			<Link to='/home'>
				<button>Home</button>
			</Link>
			<h1>CREATE NEW RECIPE</h1>
			<div className={styles.frm}>
				<form>
					<div className={`${styles.inpt}`}>
						<label htmlFor='title'>Recipe Name</label>
						<input type='text' id='title' />
					</div>

					<div className={`${styles.inpt}`}>
						<label htmlFor='image'>Image Link</label>
						<input type='text' id='image' />
					</div>

					<div className={`${styles.inpt}`}>
						<label htmlFor='summary'>Recipe Summary: </label>
						<textarea
							name='summary'
							id='summary'
							cols='40'
							rows='5'
						></textarea>
					</div>

					<div className={`${styles.inpt}`}>
						<label htmlFor='healthScore'>Health Score:</label>
						<input type='text' id='healthScore' />
					</div>

					<div className={`${styles.inpt}`}>
						<label htmlFor='steps'>Step By Step</label>
						<textarea
							name='steps'
							id='steps'
							cols='40'
							rows='5'
						></textarea>
					</div>

					<div className={`${styles.inpt}`}>
						<label htmlFor='diets'>Diet Type:</label>
						<select
							defaultValue='--Choose One--'
							name='diets'
							id='diets'
						>
							<option disabled>--Choose One--</option>
							{diets?.map((diet) => {
								return <option value={diet}>{diet}</option>;
							})}
						</select>
					</div>

					<div className={`${styles.inpt}`}>
						<button type='submit'>Save</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default CreateRecipe;
