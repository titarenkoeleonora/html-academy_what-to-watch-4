import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {connect} from "react-redux";
import MoviePage from "../movie-page/movie-page";
import Main from "../../containers/main/main";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMain() {
    const {movie, movies} = this.props;

    return (
      <Main
        movie={movie}
        movies={movies}
      />
    );
  }

  _renderMoviePage() {
    const {movies, reviews} = this.props;

    return (
      <MoviePage
        movies={movies}
        reviews={reviews}
        onMovieCardClick={this.handleTitleClick}
      />
    );
  }

  _renderApp() {
    const {activeMovie} = this.props;

    if (activeMovie !== this.props.movie) {
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
  activeMovie: PropTypes.shape({
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,

};

const mapStateToProps = ({activeMovie}) => ({activeMovie});

export {App};
export default connect(mapStateToProps)(App);
