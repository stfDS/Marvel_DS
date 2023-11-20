require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/characters/skip/:skip", async (req, res) => {
  const skip = req.params.skip;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?skip=${skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/characters/name/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${name}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/characters/name/skip/:name/:skip", async (req, res) => {
  const name = req.params.name;
  const skip = req.params.skip;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${name}&skip=${skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
