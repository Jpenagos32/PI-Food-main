const { Recipe } = require('../../db');

const getAllDbRecipes = async () => {
	try {
		const response = Recipe.findAll();
		return response;
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = getAllDbRecipes;
