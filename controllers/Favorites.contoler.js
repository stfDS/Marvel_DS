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

    // Vérifiez si comicId est fourni
    if (!comicId) {
      return res.status(400).json({ message: "Comic ID is required." });
    }

    // Trouvez l'indice du comic et vérifiez s'il existe dans les favoris
    const comicIndex = user.favorites.comics.indexOf(comicId);
    if (comicIndex === -1) {
      // Si le comic n'est pas trouvé dans les favoris
      return res.status(404).json({ message: "Comic not found in favorites." });
    }

    // Supprimez le comic des favoris
    user.favorites.comics.splice(comicIndex, 1);

    // Sauvegardez les modifications de l'utilisateur
    await user.save();

    // Réponse en cas de succès
    res.status(200).json({ message: "Comic removed from favorites." });
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: "end" });
  }
};
const FavCharacterRm = async (req, res) => {
  try {
    const user = req.user;
    const characterId = req.body.characterId;
    const title = req.body.title;

    if (user.favorites.characters.includes(characterId)) {
      res.status(205).json(title);
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

module.exports = { FavCharacterAdd, FavComicAdd, FavComicRm };
