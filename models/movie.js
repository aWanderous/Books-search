const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  cast: [String],
  image: { type: String, required: true },
  link: { type: String, required: true },
  plot: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
  Movie: Movie
};
