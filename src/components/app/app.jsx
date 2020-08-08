import React from "react";
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import MovieVideoplayer from "../movie-videoplayer/movie-videoplayer";
import withFullScreenVideoplayer from "../../hocs/with-full-screen-videoplayer/with-full-screen-videoplayer";
import {getPromoMovie, getMovies} from "../../reducer/data/selectors";
import {getIsMovieVideoplayerActive, getActiveMovieById} from "../../reducer/app-state/selectors";
import ErrorScreen from "../error-screen/error-screen";
import {AppStateActionCreator} from "../../reducer/actions/app-state-action-creator";
import {getAuthorizationStatus, getIsAuthorizing} from "../../reducer/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import SignIn from "../sign-in/sign-in";
import history from "../../history.js";
import {AppRoute} from "../../constants";
import withReview from "../../hocs/with-review/with-review";
import AddReview from "../add-review/add-review";
import PrivateRoute from "../private-route/private-route";
import MoviePage from "../movie-page/movie-page";
import Main from "../main/main";
import MyList from "../my-list/my-list";

const MovieVideoplayerWrapped = withFullScreenVideoplayer(MovieVideoplayer);
const AddReviewWrapped = withReview(AddReview);

const App = (props) => {
  const {
    activeMovie,
    movies,
    onLogin,
    isMovieVideoplayerActive,
    promoMovie,
    authorizationStatus,
    onPlayButtonClick,
    onExitButtonClick,
    onMovieCardClick,
    onReviewSubmit} = props;

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={() => {
            return <Main
              activeMovie={activeMovie ? activeMovie : promoMovie}
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
              activeMovie={activeMovie}
              movies={movies}
              onPlayButtonClick={onPlayButtonClick}
            />;
          }}
        />
        <Route exact path={AppRoute.LOGIN}
          render={() => {

            return authorizationStatus !== AuthorizationStatus.AUTH ?
              <SignIn
                onSubmit={onLogin}
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
          render={({match}) => {
            const id = Number(match.params.id);
            return <AddReviewWrapped
              id={id}
              activeMovie={activeMovie ? activeMovie : promoMovie}
              onReviewSubmit={onReviewSubmit}
            />;
          }}
        />
        <Route
          component={ErrorScreen}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })).isRequired,
  activeMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  promoMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  isMovieVideoplayerActive: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  isAuthorizing: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  promoMovie: getPromoMovie(state),
  activeMovie: getActiveMovieById(state, props.id),
  isMovieVideoplayerActive: getIsMovieVideoplayerActive(state),
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
  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },
  onMovieCardClick(activeMovie) {
    dispatch(DataOperation.loadReviews(activeMovie.id));
    dispatch(AppStateActionCreator.getActiveMovie(activeMovie));
  },
  onReviewSubmit(activeMovie, review) {
    dispatch(DataOperation.postReview(activeMovie.id, review));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
