const express = require('express');
const recipesRouter = express.Router();

recipesRouter.get('/:idRecipe', (req, res) => {
	const { idRecipe } = req.params;

	res.status(200).send(`Hola estoy en el id ${idRecipe}`);
});

module.exports = recipesRouter;
