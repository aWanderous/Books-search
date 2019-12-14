import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    movie: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getMovie(this.props.match.params.id)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img className="thumbnail" role="img" src={this.state.movie.image}></img>
              <h1>
                {this.state.movie.title} by {this.state.movie.director}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Plot</h1>
              <p>
                {this.state.movie.plot}
              </p>
              <h1>Cast</h1>
              <p>
                {this.state.movie.cast}
              </p>
              <p>
              <Link href={this.state.movie.cast}>{this.state.movie.cast}</Link>
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Directors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
