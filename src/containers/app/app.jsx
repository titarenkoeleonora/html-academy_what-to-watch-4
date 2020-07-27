import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import MovieVideoplayer from "../../components/movie-videoplayer/movie-videoplayer";
import withFullScreenVideoplayer from "../../hocs/with-full-screen-videoplayer/with-full-screen-videoplayer";
import {ActionCreator} from "../../reducer/data/data";
import {getIsError, getPromoMovie} from "../../reducer/data/selectors";
import {getIsMovieVideoplayerActive, getActiveMovie} from "../../reducer/app-state/selectors";
import ErrorScreen from "../../components/error-screen/error-screen";

const MovieVideoplayerWrapped = withFullScreenVideoplayer(MovieVideoplayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMain() {
    const {promoMovie, onPlayButtonClick} = this.props;

    return (
      <Main
        promoMovie={promoMovie}
        onPlayButtonClick={onPlayButtonClick}
      />
    );
  }

  _renderMoviePage() {
    const {promoMovie, activeMovie, onPlayButtonClick} = this.props;

    return (
      <MoviePage
        activeMovie={activeMovie ? activeMovie : promoMovie}
        onPlayButtonClick={onPlayButtonClick}
      />
    );
  }

  _renderApp() {
    const {activeMovie, isMovieVideoplayerActive, onExitButtonClick, isError} = this.props;

    if (!activeMovie) {
      return this._renderMoviePage();
    }

    if (isMovieVideoplayerActive) {
      return (
        <MovieVideoplayerWrapped
          activeMovie={activeMovie}
          onExitButtonClick={onExitButtonClick}
        />
      );
    }

    if (isError) {
      return (
        <ErrorScreen />
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
  activeMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  isError: PropTypes.bool.isRequired,
  isMovieVideoplayerActive: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  activeMovie: getActiveMovie(state),
  isMovieVideoplayerActive: getIsMovieVideoplayerActive(state),
  isError: getIsError(state),
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
