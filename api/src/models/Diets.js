const { DataTypes } = require('sequelize');

const Diets = (sequelize) => {
	sequelize.define(
		'diets',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4, // especifica un UUID generado automaticamente
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};

module.exports = Diets;
