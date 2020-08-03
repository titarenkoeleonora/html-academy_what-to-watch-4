import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from "react-router-dom";
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
import {Operation as DataOperation} from "../../reducer/data/data";
import SignIn from "../../components/sign-in/sign-in";
import history from "../../history.js";
import {AppRoute} from "../../constants";
import {PrivateRoute} from "../../components/private-route/private-route";
import {MyList} from "../my-list/my-list";

const MovieVideoplayerWrapped = withFullScreenVideoplayer(MovieVideoplayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  // _renderMain() {
  //   const {promoMovie} = this.props;

  //   return (
  //     <Main
  //       promoMovie={promoMovie}
  //     />
  //   );
  // }

  // _renderMoviePage() {
  //   const {activeMovie, promoMovie, onExitButtonClick, isMovieVideoplayerActive} = this.props;
  //   if (isMovieVideoplayerActive) {
  //     return (
  //       <MovieVideoplayerWrapped
  //         activeMovie={activeMovie ? activeMovie : promoMovie}
  //         onExitButtonClick={onExitButtonClick}
  //       />
  //     );
  //   }

  //   return (
  //     <MoviePage
  //       activeMovie={activeMovie}
  //     />
  //   );
  // }

  // _renderSignIn() {
  //   const {login} = this.props;

  //   return (
  //     <SignIn
  //       onSubmit={login}
  //     />
  //   );
  // }

  // _renderApp() {
  //   const {activeMovie, promoMovie, isMovieVideoplayerActive, isAuthorizing, authorizationStatus, onExitButtonClick, isError} = this.props;

  //   if (activeMovie) {
  //     return this._renderMoviePage();
  //   }

  //   if (isMovieVideoplayerActive) {
  //     return (
  //       <MovieVideoplayerWrapped
  //         activeMovie={activeMovie ? activeMovie : promoMovie}
  //         onExitButtonClick={onExitButtonClick}
  //       />
  //     );
  //   }

  //   if (authorizationStatus === AuthorizationStatus.AUTH) {
  //     return history.push(AppRoute.ROOT);
  //   }

  //   if (isAuthorizing) {
  //     return history.push(AppRoute.LOGIN);
  //   }

  //   if (isError) {
  //     return (
  //       <ErrorScreen />
  //     );
  //   }

  //   return history.push(AppRoute.ROOT);
  // }

  render() {
    const {activeMovie, login, promoMovie, authorizationStatus, onPlayButtonClick, onExitButtonClick, loadFavoriteMovies} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}
            render={() => {

              return <Main
                promoMovie={promoMovie}
                onPlayButtonClick={onPlayButtonClick}
              />;
            }}
          />
          <Route exact path={`${AppRoute.MOVIE}/:id`}
            render={() => {

              return <MoviePage
                activeMovie={activeMovie}
                onPlayButtonClick={onPlayButtonClick}
              />;
            }}
          />
          <Route exact path={AppRoute.LOGIN}
            render={() => {

              return authorizationStatus !== AuthorizationStatus.AUTH ?
                <SignIn
                  onSubmit={login}
                /> :
                <Redirect
                  to={AppRoute.ROOT}
                />;
            }}
          />
          <Route exact
            path={`${AppRoute.PLAYER}/:id`}
            render={() => {
              return <MovieVideoplayerWrapped
                activeMovie={activeMovie ? activeMovie : promoMovie}
                onExitButtonClick={onExitButtonClick}
              />;
            }}
          />
          <PrivateRoute exact
            path={AppRoute.MY_LIST}
            render={(routeProps) => {
              loadFavoriteMovies();
              return <MyList
                routeProps={routeProps}
              />;
            }}
          />
          <Route
            component={ErrorScreen}
          />
        </Switch>
      </Router>
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
  onExitButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  loadFavoriteMovies: PropTypes.func.isRequired,
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
  loadFavoriteMovies() {
    dispatch(DataOperation.loadFavoriteMovies());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
