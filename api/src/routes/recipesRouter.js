const express = require('express');
const recipesRouter = express.Router();
const {
	getRecipeDetail,
	getRecipeName,
} = require('../controllers/Recipes/index');

recipesRouter.get('/:idRecipe', async (req, res) => {
	try {
		// Recibir el id que viene por params
		const { idRecipe } = req.params;

		const response = await getRecipeDetail(idRecipe);

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

recipesRouter.get('/', async (req, res) => {
	try {
		const { name } = req.query;
		if (!name) return res.status(200).send('Hola estoy en /name');

		return res.status(200).send('No hay nadis');
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

module.exports = recipesRouter;
