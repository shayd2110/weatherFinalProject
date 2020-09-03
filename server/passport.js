/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/user-model");

const cookieExtractor = (req) => {
	let token = null;
	if (req && req.cookies) {
		token = req.cookies["access_token"];
	}
	return token;
};

passport.use(
	new localStrategy((emailAddress, password, done) => {
		User.findOne({ emailAddress }, (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					err,
					message: "DB connection Error!",
				});
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					err,
					message: "email or password incorrect!!",
				});
			}
			// return res.status(200).json({
			//   success: false,
			//   message: "localStrategy!",
			// });
			user.comparePassword(password, done);
			if (done.success) {
				return res.status(200).json({
					success: true,
					message: "ok",
				});
			} else {
				return res.status(200).json({
					success: false,
					message: "not ok",
				});
			}
		});
	})
);
// passport.use(
//   new jtwStrategy(
//     {
//       jwtFromRequest: cookieExtractor,
//       secretOrKey: "LalaDadaCoder",
//     },
//     (payload, done) => {
//       console.log("#########");
//       console.log("jtwStrategy");
//       console.log("#########");
//       User.findById({ _id: payload.id }, (err, user) => {
//         if (err) return done(err, false);
//         if (user) return done(null, user);
//         return done(null, false);
//       });
//     }
//   )
// );

let opts = {};
(opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()),
	(opts.secretOrKey = "LalaDadaCoder");
passport.use(
	new jwtStrategy(opts, (jwt_payload, done) => {
		console.log("#########");
		console.log("jtwStrategy");
		console.log("#########");
		User.getUserById(jwt_payload._doc._id, (err, user) => {
			if (err) {
				return done(err, false);
			}

			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	})
);

// lala = function (passport) {
//   console.log("#########");
//   console.log("jtwStrategy");
//   console.log("#########");
//   let opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
//   opts.secretOrKey = "LalaDadaCoder";
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       User.getUserById(jwt_payload._doc._id, (err, user) => {
//         if (err) {
//           return done(err, false);
//         }

//         if (user) {
//           return done(null, user);
//         } else {
//           return done(null, false);
//         }
//       });
//     })
//   );
// };

// module.exports = {
//   lala,
// };

// var jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromHeader("Authorization"),
//   secretOrKey: "LalaDadaCoder",
// };

// var jwtLogin = new jwtStrategy(jwtOptions, function (payload, done) {
//   console.log(payload);
//   User.findById(payload._id, function (err, user) {
//     if (err) {
//       return done(err, false);
//     }
//     if (user) {
//       done(null, user);
//     } else {
//       done(null, false);
//     }
//   });
// });

// //passport.use(localLogin);
// passport.use(jwtLogin);

// module.exports = {
//   initialize: () => passport.initialize(),
//   authenticateJWT: passport.authenticate("jwt", { session: false }),
//   authenticateCredentials: passport.authenticate("local", { session: false }),
// };
