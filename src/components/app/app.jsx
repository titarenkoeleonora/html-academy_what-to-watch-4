import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/action-creators.js";

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
    const {movie, movies, activeGenre, onGenreTabClick} = this.props;

    return (
      <Main
        movie={movie}
        movies={movies}
        activeGenre={activeGenre}
        onGenreTabClick={onGenreTabClick}
        onMovieCardClick={this._handleTitleClick}
      />
    );
  }

  _renderMoviePage() {
    const {movies, reviews} = this.props;
    const {activeCard} = this.state;

    return (
      <MoviePage
        movie={activeCard}
        movies={movies}
        reviews={reviews}
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(ActionCreator.getActiveGenre(activeGenre));
    dispatch(ActionCreator.getMoviesByGenre(activeGenre));
  }
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
