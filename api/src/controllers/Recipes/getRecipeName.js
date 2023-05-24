const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const getAllRecipes = require('./getAllRecipes');

const { Recipe } = require('../../db');

const getRecipeName = async (name) => {
	try {
		const response = await getAllRecipes();

		let filtradas = response.filter((resp) =>
			resp.title.toLowerCase().includes(name.toLowerCase())
		);

		console.log(filtradas);
		return filtradas;
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = getRecipeName;
