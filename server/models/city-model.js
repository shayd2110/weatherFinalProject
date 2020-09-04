/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const City = new Schema(
	{
		name: {
			type: String,
			required: "Please enter city name",
			trim: true,
		},
		image: {
			type: String,
			required: "Please enter city image",
			trim: true,
		},
		lat: {
			type: String,
			required: "Please enter city latitude",
			trim: true,
			lowercase: true,
		},
		lon: {
			type: String,
			required: "Please enter city longitude",
			trim: true,
			lowercase: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("cities", City);
