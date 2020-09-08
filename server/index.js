const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");

const db = require("./db");
const userRouter = require("./routes/user-router");
const cityRouter = require("./routes/city-router");
const favoriteRouter = require("./routes/favorite-router");

// set up express.
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
// server port (herko or loacl)
const apiPort = process.env.PORT || 3000;

// set up mongoes.
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// set up routes.
app.use(express.static(path.join(__dirname, "../client", "build")));
app.use(express.static("../client/public"));

app.use("/api", userRouter);
app.use("/api", cityRouter);
app.use("/api", favoriteRouter);

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});

app.listen(apiPort, () => console.log(`Server running on port: ${apiPort}`));
