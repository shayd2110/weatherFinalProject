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
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: "Please enter your password",
			minlength: 6,
		},
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

User.methods.comparePassword = function (password, done) {
	if (bcrypt.compareSync(password, this.password)) {
		return done({
			success: true,
			error: false,
			message: "password is a match!",
		});
	}
	// bcrypt.compare(password, this.password, (err, isMatch) => {
	//   if (err)
	//     return res.status(200).json({
	//       success: false,
	//       error: true,
	//       err: err,
	//       message: "Error while bcrypt.compare",
	//     });
	//   if (!isMatch)
	//     return res.status(200).json({
	//       success: false,
	//       error: false,
	//       message: "password isn't a match!",
	//     });

	// });
};

// User.methods.comparePassword = function (password) {
//   bcrypt.compare(password, this.password, (err, isMatch) => {
//     if (err)
//       return res.status(200).json({
//         success: false,
//         error: true,
//         err: err,
//         message: "Error while bcrypt.compare",
//       });
//     if (!isMatch)
//       return res.status(200).json({
//         success: false,
//         error: false,
//         message: "password isn't a match!",
//       });
//     return res.status(200).json({
//       success: true,
//       error: false,
//       message: "password is a match!",
//     });
//   });
// };

module.exports = mongoose.model("users", User);
