/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");

const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

router.get("/", UserCtrl.getCookieUser);
router.post("/user", UserCtrl.createUser);
router.put("/user/:id", UserCtrl.updateUser);
router.delete("/user/:id", UserCtrl.deleteUser);
router.get("/user/:id", UserCtrl.getUserById);
router.get("/users", UserCtrl.getUsers);
router.put("/sign-in", UserCtrl.connectUser);

module.exports = router;
