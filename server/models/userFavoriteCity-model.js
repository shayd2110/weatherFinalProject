const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userFavoriteCity = new Schema(
	{
		userId: {
			type: String,
			required: "Please enter user-id",
		},
		cityId: {
			type: String,
			required: "Please enter city-id",
		},
		favoriteIndex: {
			type: Number,
			required: "Please enter favorite-index",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("usersFavoriteCities", userFavoriteCity);
