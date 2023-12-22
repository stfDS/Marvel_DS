const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized",
      err: err.message,
    });
  }
};

module.exports = isAuthenticated;
