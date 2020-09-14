const Favorite = require("../models/userFavoriteCity-model");

createFavorite = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a City",
		});
	}

	const favorite = new Favorite(body);

	if (!favorite) {
		return res.status(400).json({ success: false, error: err });
	}

	favorite
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				message: "Favorite created!",
			});
		})
		.catch((error) => {
			return res.status(400).json({
				error,
				message: "Favorite not created!",
			});
		});
};

updateFavorite = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update",
		});
	}

	Favorite.findOne(
		{ userId: req.params.userId, favoriteIndex: body.favoriteIndex },
		(err, favorite) => {
			if (err) {
				return res.status(404).json({
					err,
					message: "Favorite not found!",
				});
			}
			favorite.cityId = body.cityId;
			favorite
				.save()
				.then(() => {
					return res.status(200).json({
						success: true,
						favoriteIndex: favorite.favoriteIndex,
						message: "Favorite updated!",
					});
				})
				.catch((error) => {
					return res.status(404).json({
						error,
						message: "Favorite not updated!",
					});
				});
		}
	);
};

getFavoriteByUserId = async (req, res) => {
	await Favorite.find({ userId: req.params.userId }, (err, favorite) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!favorite) {
			return res
				.status(404)
				.json({ success: false, error: "User favorite not found" });
		}

		return res.status(200).json({ success: true, data: favorite });
	}).catch((err) => console.log(err));
};

module.exports = {
	createFavorite,
	updateFavorite,
	getFavoriteByUserId,
};
