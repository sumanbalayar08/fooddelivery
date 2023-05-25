const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  CategoryName: String,
  name: String,
  img: String,
  options: {
    half: String,
    full: String,
  },
  description: String,
});

module.exports = mongoose.model("fooditems", FoodSchema);
