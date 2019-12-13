import axios from "axios";

export default {
  // Gets all movies
  getmovies: function() {
    return axios.get("/api/movies");
  },
  // Gets the movie with the given id
  getmovie: function(id) {
    return axios.get("/api/movies/" + id);
  },
  // Deletes the movie with the given id
  deletemovie: function(id) {
    return axios.delete("/api/movies/" + id);
  },
  // Saves a movie to the database
  savemovie: function(movieData) {
    return axios.post("/api/movies", movieData);
  }
};
