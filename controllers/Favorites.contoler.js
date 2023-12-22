const User = require("../models/User.model");

const FavCharacterAdd = async (req, res) => {
  try {
    const user = await User.findById(req.params.Id);
    const characterId = req.body.characterId;

    if (!user.favorites.characters.includes(characterId)) {
      user.favorites.characters.push(characterId);
      await user.save();
    }
  } catch (error) {
    res.json({ message: error });
  }
};

const FavComicAdd = async (req, res) => {
  try {
    const user = await User.findById(req.params.Id);
    const comicId = req.body.cimicId;

    if (!user.favorites.comics.includes(comicId)) {
      user.favorites.comics.push(comicId);
      await user.save();
    }
  } catch (error) {
    res.json({ message: error });
  }
};

const GetFavotites = async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    console.log(req.body.id);

    res.status(200).json(user.favorites);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { FavCharacterAdd, FavComicAdd, GetFavotites };
