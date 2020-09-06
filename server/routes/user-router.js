const express = require("express");
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const UserCtrl = require("../controllers/user-ctrl");
const UserAuth = require("../middelware/auth");

const router = express.Router();

const signToken = (userID) => {
	return JWT.sign(
		{
			iss: "NoobCoder",
			sub: userID,
		},
		"NoobCoder",
		{ expiresIn: "1h" }
	);
};

//router.get("/", UserCtrl.getCookieUser);
router.post("/user", UserCtrl.createUser);
router.put("/user/:id", UserCtrl.updateUser);
router.delete("/user/:id", UserCtrl.deleteUser);
router.get("/user/:id", UserCtrl.getUserById);
router.get("/users", UserCtrl.getUsers);
router.get("/sign-in", UserCtrl.getCookieUser);
router.post("/sign-in", UserCtrl.connectUser);
router.delete("/delete", UserAuth.auth, UserCtrl.deleteUser);
router.post("/tokenIsValid", UserAuth.tokenIsValid);
router.get("/", UserAuth.auth, UserCtrl.getUserById);

// router.get(
//   "/logout",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     console.log("@@@");
//     res.clearCookie("access_token");
//     res.jeson({ user: { emailAddress: "", admin: "" }, success: true });
//   }
// );

// router.post(
//   "/sign-in",
//   passport.authenticate("local", { session: false }),
//   (req, res) => {
//     if (req.isAuthenticated()) {
//       const { _id, emailAddress, admin } = req.user;
//       const token = signToken(_id);
//       res.cookie("access_token", token, { httpOnly: true, sameSite: true });
//       res.status(200).json({ isAuthenticated: true, user: { username, role } });
//     }
//   }
// );

router.get(
	"/logout",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		console.log("Or");
		res.clearCookie("access_token");
		res.json({ user: { emailAddress: "", admin: "" }, success: true });
	}
);

module.exports = router;
