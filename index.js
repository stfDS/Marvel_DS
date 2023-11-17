const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

// const favoritesRoutes = require("./routes/Favorites");
const homeRoutes = require("./routes/Home");
const comicsRoutes = require("./routes/Comics");
const charactersRoutes = require("./routes/Characters");

app.use(homeRoutes);
app.use(comicsRoutes);
app.use(charactersRoutes);
// app.use(favoritesRoutes);

app.all("*", (req, res) => {
  res.status(404).json("This route does not exist");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
