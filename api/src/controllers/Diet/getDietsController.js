require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Diet } = require('../../db');

const getDietsController = async () => {
	const apiDiets = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
	);

	const dietsArray = apiDiets.data.results
		.map((recipe) => recipe.diets)
		.flat();

	// para quitar todos los datos duplicados usamos el Set
	const dietsNotDuplicated = [...new Set(dietsArray)];

	dietsNotDuplicated.forEach((element) => {
		Diet.findOrCreate({
			where: {
				name: element,
			},
		});
	});

	return dietsNotDuplicated;
};

module.exports = getDietsController;
