import { useEffect } from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../Redux/actions';

// import Banner from '../../images/landing/LandingBg.jpg';

const Cards = (props) => {
	const allRecipes = useSelector((state) => state.recipes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, []);

	return (
		<div>
			<div className={style.invisible}></div>
			<div className={style.container}>
				{allRecipes.map((recipe) => {
					return (
						<Card
							img={recipe.image}
							name={recipe.title}
							diets={recipe.diets}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Cards;
