const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/characters/:skip/:name", async (req, res) => {
  const name = req.params.name;
  const skip = req.params.skip;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?skip=${skip}&name=${name}&apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/characters/:skip", async (req, res) => {
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

module.exports = router;
