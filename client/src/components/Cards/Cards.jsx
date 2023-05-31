import Card from '../Card/Card';
import style from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../Redux/actions';
import { useLoading } from '../../hooks/useLoading';
import loadingGif from '../../images/Detail/loading.gif';

const Cards = (props) => {
	const allRecipes = useSelector((state) => state.recipes);
	const dispatch = useDispatch();

	// Hook para pantalla de carga
	const loading = useLoading(dispatch, getRecipes);

	return (
		<div>
			<div className={style.invisible}></div>
			{loading ? (
				<div className={style.loading}>
					<img src={loadingGif} alt='Loading...' />
				</div>
			) : (
				<div className={style.container}>
					{allRecipes?.map((recipe, index) => {
						return (
							<Card
								key={index}
								img={recipe.image}
								name={recipe.title}
								diets={recipe.diets}
								id={recipe.id}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default Cards;
