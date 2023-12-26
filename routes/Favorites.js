const express = require("express");
const cors = require("cors");
require("dotenv").config();

const isAuthenticated = require("../middlewares/isAuthenticated.middleware");
const {
  FavCharacterAdd,
  FavComicAdd,
} = require("../controllers/Favorites.contoler");

const favRouter = express.Router();

favRouter.post("/addfav/comic", isAuthenticated, (req, res) => {
  FavComicAdd(req, res);
});

favRouter.post("/addfav/character", isAuthenticated, (req, res) => {
  FavCharacterAdd(req, res);
});

module.exports = favRouter;
