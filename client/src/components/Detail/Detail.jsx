import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as actions from '../../Redux/actions';
import loadingGif from '../../images/Detail/loading.gif';

const Detail = (props) => {
	const { id } = useParams();

	const recipes = useSelector((state) => state.recipeDetail);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	// useEffect usado para cargar una imagen mientras carga el componente
	useEffect(() => {
		/* 
        TODO otra forma de hacer esto es crear un action que me resetee recipeDetail a un arreglo vacio
        TODO y que se ejecute cuando se desmonta el componente
        ? para simular el desmontado del componente deberia hacer un return de una cb que despache resetRecipe
        TODO hacer esto mismo de que renderice una imagen mientras carga el componente, pero en Cards.jsx
        */
		setLoading(true);

		const fetch = async () => {
			await dispatch(actions.recipeDetail(id));
			setLoading(false);
		};

		fetch();
	}, [id, dispatch]);

	return (
		<div>
			<div className={styles.invisible}></div>
			{loading ? (
				<div className={styles.loading}>
					<img src={loadingGif} alt='Loading...' />
				</div>
			) : (
				<div>
					<Link to='/home'>
						<button>Back To home</button>
					</Link>
					<h1>{recipes.title}</h1>
					<img src={recipes.image} alt='' />
					<p>{recipes.summary}</p>
					<h3>Health Score: {recipes.healthScore}</h3>
					{recipes.steps?.map((step) => {
						return (
							<div>
								<h3>Step {step.number}</h3>
								<p>{step.step}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default Detail;
