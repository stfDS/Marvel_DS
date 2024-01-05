const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/characters/skip/:skip", async (req, res) => {
  const skip = req.params.skip;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?skip=${skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/characters/skip/name/:skip/:name", async (req, res) => {
  const name = req.params.name;
  const skip = req.params.skip;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${name}&skip=${skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/characters/skip/limit/:skip/:limit", async (req, res) => {
  const limit = req.params.limit;
  const skip = req.params.skip;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?limit=${limit}&skip=${skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
