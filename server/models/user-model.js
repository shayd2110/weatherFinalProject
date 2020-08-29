/* eslint-disable no-undef */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const User = new Schema(
	{
		firstName: {
			type: String,
			required: "Please enter your first name",
			trim: true,
		},
		lastName: {
			type: String,
			required: "Please enter your last name",
			trim: true,
		},
		emailAddress: {
			type: String,
			required: "Please enter your email address",
			trim: true,
			lowercase: true,
		},
		password: { type: String, required: "Please enter your password" },
		admin: { type: Boolean, default: false },
		lastLogin: { type: Date, default: Date.now },
	},
	{ timestamps: true }
);

User.pre("save", function (next) {
	if (!this.isModified("password")) return next();
	bcrypt.hash(this.password, 10, (err, passwordHash) => {
		if (err) return next(err);
		this.password = passwordHash;
		next();
	});
});

User.methods.comparePassword = function (password, cb) {
	bcrypt.compare(password, this.password, (err, isMatch) => {
		if (err) return cb(err);
		if (!isMatch) return cb(null.isMatch);
		return cb(null.this);
	});
};

module.exports = mongoose.model("users", User);
