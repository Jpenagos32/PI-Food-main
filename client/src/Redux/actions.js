import { GET_RECIPES, GET_RECIPE_NAME, GET_RECIPE_DETAIL } from './actionTypes';
import axios from 'axios';

const URL = 'http://localhost:3001';

// action que obtiene todas las recetas
export const getRecipes = () => {
	return async (dispatch) => {
		const response = await axios.get(`${URL}/recipes`);

		return dispatch({
			type: GET_RECIPES,
			payload: response.data,
		});
	};
};

// Obtener las recetas por nombre
export const getRecipeName = (name) => {
	return async (dispatch) => {
		const response = await axios.get(`${URL}/recipes?name=${name}`);

		return dispatch({
			type: GET_RECIPE_NAME,
			payload: response.data,
		});
	};
};

export const recipeDetail = (detailId) => {
	return async (dispatch) => {
		const response = await axios.get(`${URL}/recipes/${detailId}`);
		return dispatch({
			type: GET_RECIPE_DETAIL,
			payload: response.data,
		});
	};
};
