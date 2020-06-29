import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: this.props.movie
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(movie) {
    this.setState({
      activeCard: movie,
    });
  }

  _renderMain() {
    const {movie, movies} = this.props;

    return (
      <Main
        movie={movie}
        movies={movies}
        onMovieCardClick={this._handleTitleClick}
      />
    );
  }

  _renderMoviePage() {
    const {movies} = this.props;
    const {activeCard} = this.state;

    return (
      <MoviePage
        movie={activeCard}
        movies={movies}
        onMovieCardClick={this._handleTitleClick}
      />
    );
  }

  _renderApp() {
    const {activeCard} = this.state;

    if (activeCard !== this.props.movie) {
      return this._renderMoviePage();
    }

    return this._renderMain();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

export default App;
