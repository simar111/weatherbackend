const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  favoriteLocations: [{ type: String }],
});

module.exports = mongoose.model("User", userSchema);