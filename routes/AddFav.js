const { FavCharacterAdd, FavComicAdd } = require("../controllers/FavCreate");

const favRouter = express.Router();

favRouter.post("/addfav/comic", isAuthenticated, (req, res) => {
  FavComicAdd(req, res);
});

favRouter.post("/addfav/character", isAuthenticated, (req, res) => {
  FavCharacterAdd(req, res);
});

module.exports = favRouter;
