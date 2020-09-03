/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");

const db = require("./db");
const userRouter = require("./routes/user-router");
const cityRouter = require("./routes/city-router");
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

// app.get("/", (req, res) => {
//   console.log("Hello World!");
//   res.send("Hello World!");
// });

// set up routes.
app.use("/api", userRouter);
app.use("/api", cityRouter);

app.listen(apiPort, () => console.log(`Server running on port: ${apiPort}`));
