const express = require("express");
const router = express.Router();
router.get("/character", (req, res) => {
  res.json({ message: "Charcter" });
});
module.exports = router;
