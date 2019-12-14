import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Saved extends Component {
	state = {
		movies: [],
		title: "",
		director: "",
		cast: [],
		image: "",
		link: "",
		plot: ""
	};

	componentDidMount() {
		this.loadMovies();
	}

	loadMovies = () => {
		API.getMovies()
			.then((res) =>
				this.setState({ movies: res.data, title: "", director: "", plot: "" })
			)
			.catch((err) => console.log(err));
	};

	deleteMovie = (id) => {
		API.deleteMovie(id)
			.then((res) => this.loadMovies())
			.catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		if (this.state.title && this.state.director) {
			API.saveMovie({
				title: this.state.title,
				director: this.state.director,
				plot: this.state.plot
			})
				.then((res) => this.loadMovies())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
						<Jumbotron>
							<h1>Movies On My List</h1>
						</Jumbotron>
						{this.state.movies.length ? (
							<List>
								{this.state.movies.map((movie) => (
									<ListItem key={movie._id}>
										<Link to={"/Movies/" + movie._id}>
											<strong>
												{movie.title} by {movie.director}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteMovie(movie._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
			</Container>
		);
	}
}

export default Saved;
