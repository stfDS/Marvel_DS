require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/character/:id", async (req, res) => {
  const characterId = req.params.id;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
