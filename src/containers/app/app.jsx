import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import MovieVideoplayer from "../../components/movie-videoplayer/movie-videoplayer";
import {ActionCreator} from "../../reducer/action-creator";
import withFullScreenVideoplayer from "../../hocs/with-full-screen-videoplayer/with-full-screen-videoplayer";

const MovieVideoplayerWrapped = withFullScreenVideoplayer(MovieVideoplayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMain() {
    const {activeMovie, movies, onPlayButtonClick} = this.props;

    return (
      <Main
        movie={activeMovie}
        movies={movies}
        onPlayButtonClick={onPlayButtonClick}
      />
    );
  }

  _renderMoviePage() {
    const {movies, reviews, onPlayButtonClick} = this.props;

    return (
      <MoviePage
        movies={movies}
        reviews={reviews}
        onPlayButtonClick={onPlayButtonClick}
      />
    );
  }

  _renderApp() {
    const {activeMovie, isMovieVideoplayerActive, onExitButtonClick} = this.props;

    if (activeMovie !== this.props.movie) {
      return this._renderMoviePage();
    } else if (isMovieVideoplayerActive) {
      return (
        <MovieVideoplayerWrapped
          activeMovie={activeMovie}
          onExitButtonClick={onExitButtonClick}
        />
      );
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
    src: PropTypes.string.isRequired,
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
  isMovieVideoplayerActive: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeMovie: state.activeMovie,
  isMovieVideoplayerActive: state.isMovieVideoplayerActive,
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.activateMovieVideoplayer(true));
  },
  onExitButtonClick() {
    dispatch(ActionCreator.activateMovieVideoplayer(false));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
