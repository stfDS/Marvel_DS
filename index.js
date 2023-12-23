require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();
require("./database/dataIndex");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const homeRoutes = require("./routes/Home");
const comicsRoutes = require("./routes/Comics");
const characterRoutes = require("./routes/Character");
const favoritesRoutes = require("./routes/Favorites");
const SignRoutes = require("./routes/Connection");

app.use(homeRoutes);
app.use(comicsRoutes);
app.use(characterRoutes);
app.use(favoritesRoutes);
app.use(SignRoutes);

app.all("*", (req, res) => {
  res.status(404).json("This route does not exist");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
