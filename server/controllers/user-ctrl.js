/* eslint-disable  */
const User = require("../models/user-model");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

let app = express();
createUser = (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(200).json({
			success: false,
			message: "You must provide all User info!",
		});
	}
	User.findOne({ emailAddress: req.body.emailAddress }).then((user) => {
		if (user) {
			return res.status(200).json({
				success: false,
				message: "Email already exists!",
			});
		} else {
			//body.password = bcrypt.hashSync(body.password, 10);
			const user = new User(body);

			if (!user) {
				return res.status(400).json({ success: false, error: err });
			}

			user.save()
				.then(() => {
					return res.status(201).json({
						success: true,
						id: user._id,
						message: "User created!",
					});
				})
				.catch((error) => {
					return res.status(400).json({
						error,
						message: "User not created!",
					});
				});
		}
	});
};

updateUser = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update",
		});
	}

	User.findOne({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "User not found!",
			});
		}
		user.firstName = body.firstName;
		user.lastName = body.lastName;
		user.emailAddress = body.emailAddress;
		user.password = body.password;
		user.lastUpdate = body.lastUpdate;
		user.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: user._id,
					message: "User updated!",
				});
			})
			.catch((error) => {
				return res.status(404).json({
					error,
					message: "User not updated!",
				});
			});
	});
};

deleteUser = async (req, res) => {
	await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: "User not found" });
		}

		return res.status(200).json({ success: true, data: user });
	}).catch((err) => console.log(err));
};

getUserById = async (req, res) => {
	await User.findOne({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: "User not found" });
		}
		return res.status(200).json({ success: true, data: user });
	}).catch((err) => console.log(err));
};

getUsers = async (req, res) => {
	await User.find({}, (err, users) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!users.length) {
			return res
				.status(404)
				.json({ success: false, error: "Users not found" });
		}
		return res.status(200).json({ success: true, data: users });
	}).catch((err) => console.log(err));
};

connectUser = async (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update",
		});
	}

	User.findOne({ emailAddress: req.body.emailAddress }, (err, user) => {
		if (
			err ||
			user == null ||
			!bcrypt.compareSync(req.body.password, user.password)
		) {
			return res.status(200).json({
				success: false,
				err,
				message: "email or password incorrect!!",
			});
		}

		res.cookie("firtName", user.firstName);
		user.lastLogin = Date.now();
		user.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: user._id,
					message: "User exist & updated & can conncet!",
				});
			})
			.catch((error) => {
				return res.status(404).json({
					success: false,
					error,
					message: "User not (exist & updated & can conncet)!",
				});
			});
	});
};

getCookieUser = async (req, res) => {
	res.send(req.cookies);
	return res.status(200).json({
		success: true,
		message: "here!",
		cookie: x,
	});
};

module.exports = {
	getCookieUser,
	createUser,
	updateUser,
	deleteUser,
	getUsers,
	getUserById,
	connectUser,
};
