const express = require('express');
const recipesRouter = express.Router();
const {
	getRecipeDetail,
	getRecipeName,
} = require('../controllers/Recipes/index');

const { filterRecipeById } = require('../handlers/index');

recipesRouter.get('/:idRecipe', filterRecipeById);

recipesRouter.get('/', async (req, res) => {
	try {
		const name = req.query.name;

		const recipeData = await getRecipeName(name);
		// console.log(recipeData);

		return res.status(200).json(recipeData);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

module.exports = recipesRouter;
