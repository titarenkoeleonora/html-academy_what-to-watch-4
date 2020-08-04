import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants";
import history from "../../history";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";

const MovieCardButtons = ({activeMovie, authorizationStatus, changeMovieIsFavorite, onPlayButtonClick}) => {
  const handleMovieListButtonClick = () => {

    return authorizationStatus === AuthorizationStatus.AUTH
      ? changeMovieIsFavorite(activeMovie)
      : history.push(AppRoute.LOGIN);
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
      <a href="add-review.html" className="btn movie-card__button">Add review</a>
    </div>
  );
};

MovieCardButtons.propTypes = {
  activeMovie: PropTypes.object,
  onPlayButtonClick: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
  changeMovieIsFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeMovieIsFavorite(movie) {
    dispatch(DataOperation.changeFavoriteStatus(movie));
  }
});

export {MovieCardButtons};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
