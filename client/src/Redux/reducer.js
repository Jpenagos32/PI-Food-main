import { GET_RECIPES, GET_RECIPE_DETAIL, GET_RECIPE_NAME } from './actionTypes';

const initialState = {
	recipes: [],
	recipeDetail: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: action.payload,
			};

		case GET_RECIPE_NAME:
			return {
				...state,
				recipes: action.payload,
			};

		case GET_RECIPE_DETAIL:
			return {
				...state,
				recipeDetail: action.payload,
			};

		default:
			return { ...state };
	}
};

export default reducer;
