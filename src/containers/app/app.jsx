import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import MovieVideoplayer from "../../components/movie-videoplayer/movie-videoplayer";
import withFullScreenVideoplayer from "../../hocs/with-full-screen-videoplayer/with-full-screen-videoplayer";
import {getIsError, getPromoMovie} from "../../reducer/data/selectors";
import {getIsMovieVideoplayerActive, getActiveMovie} from "../../reducer/app-state/selectors";
import ErrorScreen from "../../components/error-screen/error-screen";
import {AppStateActionCreator} from "../../reducer/actions/app-state-action-creator";
import {getAuthorizationStatus, getIsAuthorizing} from "../../reducer/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import SignIn from "../../components/sign-in/sign-in";

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
    const {activeMovie, promoMovie, onExitButtonClick, onPlayButtonClick, isMovieVideoplayerActive} = this.props;
    if (isMovieVideoplayerActive) {
      return (
        <MovieVideoplayerWrapped
          activeMovie={activeMovie ? activeMovie : promoMovie}
          onExitButtonClick={onExitButtonClick}
        />
      );
    }

    return (
      <MoviePage
        activeMovie={activeMovie}
        onPlayButtonClick={onPlayButtonClick}
      />
    );
  }

  _renderSignIn() {
    const {login} = this.props;
    return (
      <SignIn
        onSubmit={login}
      />
    );
  }

  _renderApp() {
    const {activeMovie, promoMovie, isMovieVideoplayerActive, isAuthorizing, authorizationStatus, onPlayButtonClick, onExitButtonClick, isError} = this.props;

    if (activeMovie) {
      return this._renderMoviePage();
    }

    if (isMovieVideoplayerActive) {
      return (
        <MovieVideoplayerWrapped
          activeMovie={activeMovie ? activeMovie : promoMovie}
          onExitButtonClick={onExitButtonClick}
        />
      );
    }

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <Main
          promoMovie={promoMovie}
          onPlayButtonClick={onPlayButtonClick}
        />
      );
    }

    if (isAuthorizing) {
      return this._renderSignIn();
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
          <Route exact path="/dev-auth">
            {this._renderSignIn()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  activeMovie: PropTypes.object,
  promoMovie: PropTypes.object.isRequired,
  isError: PropTypes.bool,
  isMovieVideoplayerActive: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  isAuthorizing: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  activeMovie: getActiveMovie(state),
  isMovieVideoplayerActive: getIsMovieVideoplayerActive(state),
  isError: getIsError(state),
  authorizationStatus: getAuthorizationStatus(state),
  isAuthorizing: getIsAuthorizing(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(AppStateActionCreator.activateMovieVideoplayer(true));
  },
  onExitButtonClick() {
    dispatch(AppStateActionCreator.activateMovieVideoplayer(false));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
