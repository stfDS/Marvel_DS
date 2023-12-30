const express = require("express");

require("dotenv").config();

const isAuthenticated = require("../middlewares/isAuthenticated.middleware");
const {
  FavCharacterAdd,
  FavComicAdd,
  FavCharacterRm,
  FavComicRm,
} = require("../controllers/Favorites.contoler");

const favRouter = express.Router();

favRouter.post("/addfav/comic", isAuthenticated, (req, res) => {
  FavComicAdd(req, res);
});

favRouter.post("/addfav/character", isAuthenticated, (req, res) => {
  FavCharacterAdd(req, res);
});

favRouter.delete("/rmfav/comic", isAuthenticated, (req, res) => {
  FavComicRm(req, res);
});

favRouter.delete("/rmfav/character", isAuthenticated, (req, res) => {
  FavCharacterRm(req, res);
});

module.exports = favRouter;
