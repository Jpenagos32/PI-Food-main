const { getAllRecipes } = require('../controllers/Recipes/index');

const filterRecipeByName = async (req, res) => {
	try {
		const name = req.query.name;

		const response = await getAllRecipes();

		let filtradas = response.filter((resp) =>
			resp.title.toLowerCase().includes(name.toLowerCase())
		);

		return res.status(200).json(filtradas);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
};

module.exports = filterRecipeByName;
