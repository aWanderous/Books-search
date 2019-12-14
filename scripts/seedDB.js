const mongoose = require("mongoose");
const db = require("../models/movie");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/comicsmovies");

const movieSeed = [
	{
		title: "Iron Man",
		director: "Jon Favreau",
		cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard"],
		image:
			"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		link: "https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_(film)",
		plot:
			"The film tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
		date: new Date(Date.now())
	},
	{
		title: "The Incredible Hulk",
		director: "Louis Leterrier",
		cast: ["Edward Norton", "Liv Tyler", "Tim Roth"],
		image:
			"https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		link: "https://marvelcinematicuniverse.fandom.com/wiki/The_Incredible_Hulk",
		plot:
			"Depicting the events after the Gamma Bomb. 'The Incredible Hulk' tells the story of Dr Bruce Banner, who seeks a cure to his unique condition, which causes him to turn into a giant green monster under emotional stress. Whilst on the run from military which seeks his capture, Banner comes close to a cure. But all is lost when a new creature emerges; The Abomination.",
		date: new Date(Date.now())
	}
];

db.Movie.remove({})
	.then(() => db.Movie.collection.insertMany(movieSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});