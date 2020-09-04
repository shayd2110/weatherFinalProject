const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No Authentication token, access denied!",
      });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.status(401).json({
        success: false,
        message: "Token Verification failed, access denied!",
      });
    }
    req.params.id = verified.id;
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

const tokenIsValid = (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json({ success: false });
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json({ success: false });
    req.params.id = verified.id;
    const user = User.findById(req.params.id);
    if (!user) return res.json({ success: false });
    return res.json({ success: true });
  } catch (err) {
    res.status(200).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  auth,
  tokenIsValid,
};
