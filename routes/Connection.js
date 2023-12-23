const express = require("express");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../middlewares/isAuthenticated.middleware");
const cors = require("cors");
const userRouter = express.Router();
require("dotenv").config();

const corsOptions = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: process.env.ORIGIN,
};

userRouter.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "Missing parameters" });
    }
    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already used" });
    const hashPassw = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      account: {
        username,
      },
      password: hashPassw,
    });

    await newUser.save();

    // res.status(201).json({ message: "User successfully created"  });
    res.status(201).json({ message: "User successfully created" });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred during registration",
      err: err.message,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Missing parameters" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Email not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.JWT_SECURE_COOKIE,
      maxAge: parseInt(process.env.JWT_EXPIRATION, 10),
    });

    res.status(200).json({ ...user._doc, password: undefined, token });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred while connecting",
      err: err.message,
    });
  }
});

userRouter.get("/refresh", cors(corsOptions), isAuthenticated, (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({ ...user._doc, password: undefined });
  } catch (err) {
    res.status(500).json({
      message: "An error has occurred",
      err: err.message,
    });
  }
});

userRouter.delete("/logout", cors(corsOptions), async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Déconnexion" });
});

module.exports = userRouter;
