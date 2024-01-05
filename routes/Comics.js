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

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/comics/skip/title/:skip/:title", async (req, res) => {
  const skip = req.params.skip;
  const title = req.params.title;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?skip=${skip}&title=${title}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/comics/skip/limit/:skip/:limit", async (req, res) => {
  const skip = req.params.skip;
  const limit = req.params.limit;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?skip=${skip}&limit=${limit}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.status(200).json(response.data);
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

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
