require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/comics/skip/:skip", async (req, res) => {
  const skip = req.params.skip;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?skip=${skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/comics/title/skip/:title/:skip", async (req, res) => {
  const skip = req.params.skip;
  const title = req.params.title;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?title=${title}&skip=${skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/comic/:id", async (req, res) => {
  const comicId = req.params.id;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
