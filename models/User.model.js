const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  account: {
    username: String,
    avatar: Object,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: {
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    comics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comic" }],
  },
});

module.exports = User;
