import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants";
import history from "../../history";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import {AppStateActionCreator} from "../../reducer/actions/app-state-action-creator";

const MovieCardButtons = ({activeMovie, authorizationStatus, onAddReviewClick, onChangeMovieIsFavorite, onPlayButtonClick}) => {
  const handleMovieListButtonClick = () => {
    return authorizationStatus === AuthorizationStatus.AUTH ?
      onChangeMovieIsFavorite(activeMovie)
      :
      history.push(AppRoute.LOGIN);
  };

  const handleAddReviewButtonClick = () => {
    return authorizationStatus === AuthorizationStatus.AUTH ?
      onAddReviewClick()
      :
      history.push(AppRoute.LOGIN);
  };


  const addToMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleMovieListButtonClick(true)}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  const removeFromMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleMovieListButtonClick(false)}
    >
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  return (
    <div className="movie-card__buttons">
      <Link
        className="btn btn--play movie-card__button"
        onClick={() => {
          onPlayButtonClick();
          history.push(`${AppRoute.PLAYER}/${activeMovie && activeMovie.id}`);
        }}
        to={`${AppRoute.PLAYER}/${activeMovie && activeMovie.id}`}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </Link>
      {activeMovie.isFavorite ? removeFromMyList : addToMyList}
      <Link
        to={`${AppRoute.MOVIE}/${activeMovie.id}/review`}
        className="btn movie-card__button"
        onClick={(evt) => {
          evt.preventDefault();
          handleAddReviewButtonClick();
          history.push(`${AppRoute.MOVIE}/${activeMovie.id}/review`);
        }}
      >Add review</Link>
    </div>
  );
};

MovieCardButtons.propTypes = {
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
  onPlayButtonClick: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
  onChangeMovieIsFavorite: PropTypes.func.isRequired,
  onAddReviewClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeMovieIsFavorite(movie) {
    dispatch(DataOperation.changeFavoriteStatus(movie));
  },
  onAddReviewClick() {
    dispatch(AppStateActionCreator.addReview(true));
  }
});

export {MovieCardButtons};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
