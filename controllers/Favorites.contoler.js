const User = require("../models/User.model");

const FavCharacterAdd = async (req, res) => {
  try {
    const user = req.user;
    const characterId = req.body.characterId;
    const title = req.body.title;

    if (!user.favorites.characters.includes(characterId)) {
      user.favorites.characters.push(characterId);
      await user.save();

      res.status(201).json(title);
    }
    if (user.favorites.characters.includes(characterId)) {
      res.status(406).json(title);
    }
  } catch (error) {
    res.json({ message: error });
  }
};

const FavComicAdd = async (req, res) => {
  try {
    const user = req.user;
    const comicId = req.body.comicId;
    const title = req.body.title;

    if (!user.favorites.comics.includes(comicId)) {
      user.favorites.comics.push(comicId);
      await user.save();
      res.status(201).json(title);
    }
    if (user.favorites.comics.includes(comicId)) {
      res.status(406).json(title);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { FavCharacterAdd, FavComicAdd };
