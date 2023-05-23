const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const { Recipe } = require('../../db');

const getRecipeDetail = async (id) => {
	console.log('El id', id);

	// si el id incluye - que busque en la base de datos
	if (id.includes('-')) {
		try {
			const recipeDB = await Recipe.findOne({
				where: { id: id },
			});
			return recipeDB;
		} catch (error) {}
	} else {
		//  en caso contrario debe hacer la request a la api
		const response = await axios.get(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
		);

		const { title, summary, healthScore, image, analyzedInstructions } =
			response.data;

		const apiRecipe = {
			id: response.data.id,
			title,
			summary,
			healthScore,
			image,
			steps: analyzedInstructions[0]?.steps.map((step) => {
				return {
					number: step.number,
					step: step.step,
				};
			}),
		};

		return apiRecipe;
	}
};

module.exports = getRecipeDetail;
