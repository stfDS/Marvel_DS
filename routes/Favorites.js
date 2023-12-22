const express = require("express");
const cors = require("cors");
require("dotenv").config();

const isAuthenticated = require("../middlewares/isAuthenticated.middleware");
const {
  FavCharacterAdd,
  FavComicAdd,
  GetFavotites,
} = require("../controllers/Favorites.contoler");

const favRouter = express.Router();

const corsOptions = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: process.env.ORIGIN,
};

favRouter.get("/favorites", cors(corsOptions), isAuthenticated, (req, res) => {
  GetFavotites(req, res);
});

favRouter.post(
  "/addfav/comic",
  cors(corsOptions),
  isAuthenticated,
  (req, res) => {
    FavComicAdd(req, res);
  }
);

favRouter.post(
  "/addfav/character",
  cors(corsOptions),
  isAuthenticated,
  (req, res) => {
    FavCharacterAdd(req, res);
  }
);

module.exports = favRouter;
