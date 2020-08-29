/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const db = require("./db");
const userRouter = require("./routes/user-router");
const cityRouter = require("./routes/city-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
	console.log("Hello World!");
	console.log(req.cookies);
	res.send(req.cookies);
	//res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api", userRouter);
app.use("/api", cityRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
