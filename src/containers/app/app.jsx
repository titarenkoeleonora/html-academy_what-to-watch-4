import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import MovieVideoplayer from "../../components/movie-videoplayer/movie-videoplayer";
import withFullScreenVideoplayer from "../../hocs/with-full-screen-videoplayer/with-full-screen-videoplayer";
import {getIsError, getPromoMovie, getMovies} from "../../reducer/data/selectors";
import {getIsMovieVideoplayerActive, getActiveMovie} from "../../reducer/app-state/selectors";
import ErrorScreen from "../../components/error-screen/error-screen";
import {AppStateActionCreator} from "../../reducer/actions/app-state-action-creator";
import {getAuthorizationStatus, getIsAuthorizing} from "../../reducer/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import SignIn from "../../components/sign-in/sign-in";
import history from "../../history.js";
import {AppRoute} from "../../constants";
import MyList from "../my-list/my-list";
import withReview from "../../hocs/with-review/with-review";
import AddReview from "../../components/add-review/add-review";
import {PrivateRoute} from "../../components/private-route/private-route";

const MovieVideoplayerWrapped = withFullScreenVideoplayer(MovieVideoplayer);
const AddReviewWrapped = withReview(AddReview);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {activeMovie, movies, login, isMovieVideoplayerActive, promoMovie, authorizationStatus, onPlayButtonClick, onExitButtonClick, onMovieCardClick} = this.props;

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
                onMovieCardClick={onMovieCardClick}
              />;
            }}
          />
          <Route exact path={`${AppRoute.MOVIE}/:id`}
            render={({match}) => {
              const id = Number(match.params.id);
              return <MoviePage
                id={id}
                movies={movies}
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
              if (isMovieVideoplayerActive) {
                return <MovieVideoplayerWrapped
                  activeMovie={activeMovie ? activeMovie : promoMovie}
                  onExitButtonClick={onExitButtonClick}
                />;
              }
              return history.goBack();
            }}
          />
          <PrivateRoute exact
            path={AppRoute.MY_LIST}
            render={() => {
              return <MyList
                onMovieCardClick={onMovieCardClick}
              />;
            }}
          />
          <PrivateRoute exact
            path={`${AppRoute.MOVIE}/:id/review`}
            render={() => {
              return <AddReviewWrapped/>;
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
  movies: PropTypes.array.isRequired,
  activeMovie: PropTypes.object,
  promoMovie: PropTypes.object.isRequired,
  isError: PropTypes.bool,
  isMovieVideoplayerActive: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  isAuthorizing: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  activeMovie: getActiveMovie(state),
  isMovieVideoplayerActive: getIsMovieVideoplayerActive(state),
  isError: getIsError(state),
  authorizationStatus: getAuthorizationStatus(state),
  isAuthorizing: getIsAuthorizing(state),
  movies: getMovies(state),
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
  onMovieCardClick(activeMovie) {
    dispatch(DataOperation.loadReviews(activeMovie.id));
    dispatch(AppStateActionCreator.getActiveMovie(activeMovie));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
