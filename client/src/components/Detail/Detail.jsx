import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { recipeDetail } from '../../Redux/actions';
import loadingGif from '../../images/Detail/loading.gif';
import { useLoading } from '../../hooks/personalizedHooks';

const Detail = (props) => {
	const { id } = useParams();

	const recipes = useSelector((state) => state.recipeDetail);
	const dispatch = useDispatch();

	// Hook personalizado que agrega una imagen de carga antes de renderizar el componente
	const loading = useLoading(recipeDetail, id);

	return (
		<div>
			<div className='invisible'></div>
			{loading ? (
				<div className={styles.loading}>
					<img src={loadingGif} alt='Loading...' />
				</div>
			) : (
				<div className={styles.container}>
					<Link to='/home'>
						<button>Back To home</button>
					</Link>

					<h1>{recipes.title}</h1>
					<img src={recipes.image} alt='' />
					<p
						// quitar las etiquetas <b> que vienen en el resumen de la api
						dangerouslySetInnerHTML={{ __html: recipes.summary }}
					></p>
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
