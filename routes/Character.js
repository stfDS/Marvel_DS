require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/character/:id", async (req, res) => {
  //   console.log(req.params.id);
  const characterId = req.params.id;
  //   console.log(characterId);
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
