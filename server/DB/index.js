/* eslint-disable no-undef */
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
	.connect(
		"mongodb://127.0.0.1:27017/weatherDB",
		{ useNewUrlParser: true },
		() => console.log("secsees connection to weatherDB")
	)
	.catch((e) => {
		console.error("Connection error", e.message);
	});

const db = mongoose.connection;

module.exports = db;
