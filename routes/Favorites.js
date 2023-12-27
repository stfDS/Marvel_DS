const express = require("express");
const cors = require("cors");
require("dotenv").config();

const isAuthenticated = require("../middlewares/isAuthenticated.middleware");
const {
  FavCharacterAdd,
  FavComicAdd,
} = require("../controllers/Favorites.contoler");

const corsOptions2 = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: process.env.ORIGIN,
};

const favRouter = express.Router();

favRouter.post(
  "/addfav/comic",
  cors(corsOptions2),
  isAuthenticated,
  (req, res) => {
    FavComicAdd(req, res);
  }
);

favRouter.post(
  "/addfav/character",
  cors(corsOptions2),
  isAuthenticated,
  (req, res) => {
    FavCharacterAdd(req, res);
  }
);

module.exports = favRouter;
