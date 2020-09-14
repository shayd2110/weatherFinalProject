const express = require("express");
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const UserCtrl = require("../controllers/user-ctrl");
const UserAuth = require("../middelware/auth");

const router = express.Router();

router.post("/user", UserCtrl.createUser);
router.put("/user/:id", UserCtrl.updateUser);
router.delete("/user/:id", UserCtrl.deleteUser);
router.get("/user/:id", UserCtrl.getUserById);
router.get("/users", UserCtrl.getUsers);
router.post("/sign-in", UserCtrl.connectUser);
router.delete("/delete", UserAuth.auth, UserCtrl.deleteUser);
router.post("/tokenIsValid", UserAuth.tokenIsValid);
router.get("/", UserAuth.auth, UserCtrl.getUserById);

router.get(
	"/logout",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.clearCookie("access_token");
		res.json({ user: { emailAddress: "", admin: "" }, success: true });
	}
);

module.exports = router;
