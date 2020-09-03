/* eslint-disable no-undef */
const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb://127.0.0.1:27017/weatherDB",
//     { useNewUrlParser: true },
//     () => console.log("successful connection to weatherDB")
//   )
//   .catch((e) => {
//     console.error("Connection error", e.message);
//   });
mongoose
	.connect(
		process.env.MONGODB_CONNECTION_STRING,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		},
		(err) => {
			if (err) throw err;
			console.log("successful connection to weatherDB");
		}
	)
	.catch((e) => {
		console.error("Connection error", e.message);
	});

const db = mongoose.connection;
module.exports = db;
