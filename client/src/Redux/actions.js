import { GET_RECIPES } from './actionTypes';
import axios from 'axios';

// action que obtiene todas las recetas
export const getRecipes = () => {
	return async (dispatch) => {
		const response = await axios.get('http://localhost:3001/recipes');

		return dispatch({
			type: GET_RECIPES,
			payload: response.data,
		});
	};
};
