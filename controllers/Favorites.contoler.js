const User = require("../models/User.model");

const FavCharacterAdd = async (req, res) => {
  try {
    const user = req.user;
    const characterId = req.body.characterId;
    const title = req.body.title;

    if (user.favorites.characters.includes(characterId)) {
      res.status(406).json(title);
    }
    if (!user.favorites.characters.includes(characterId)) {
      user.favorites.characters.push(characterId);
      await user.save();

      res.status(201).json(title);
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

    if (user.favorites.comics.includes(comicId)) {
      res.status(406).json(title);
    }
    if (!user.favorites.comics.includes(comicId)) {
      user.favorites.comics.push(comicId);
      await user.save();
      res.status(201).json(title);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const FavComicRm = async (req, res) => {
  try {
    const user = req.user;
    const comicId = req.body.comicId;

    if (!comicId) {
      return res.status(400).json({ message: "Comic ID is required." });
    }

    const comicIndex = user.favorites.comics.indexOf(comicId);
    if (comicIndex === -1) {
      return res.status(404).json({ message: "Comic not found in favorites." });
    }

    user.favorites.comics.splice(comicIndex, 1);

    await user.save();

    res.status(200).json({ message: "Comic removed from favorites." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const FavCharacterRm = async (req, res) => {
  try {
    const user = req.user;
    const characterId = req.body.characterId;

    if (!characterId) {
      return res.status(400).json({ message: "Character ID is required." });
    }

    const characterIndex = user.favorites.characters.indexOf(characterId);

    if (characterIndex === -1) {
      return res
        .status(404)
        .json({ message: "Character not found in favorites." });
    }

    user.favorites.characters.splice(characterIndex, 1);

    await user.save();

    res.status(200).json({ message: "Character removed from favorites." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { FavCharacterAdd, FavComicAdd, FavComicRm, FavCharacterRm };
