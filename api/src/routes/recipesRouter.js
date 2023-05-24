const express = require('express');
const recipesRouter = express.Router();
const { filterRecipeById, filterRecipeByName } = require('../handlers/index');

recipesRouter.get('/:idRecipe', filterRecipeById);

recipesRouter.get('/', filterRecipeByName);

module.exports = recipesRouter;
