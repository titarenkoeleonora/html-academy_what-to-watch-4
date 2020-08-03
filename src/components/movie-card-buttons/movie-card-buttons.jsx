import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants";
import history from "../../history";

export const MovieCardButtons = ({activeMovie, onPlayButtonClick}) => {

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
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
        <span>My list</span>
      </button>
      <a href="add-review.html" className="btn movie-card__button">Add review</a>
    </div>
  );
};

MovieCardButtons.propTypes = {
  activeMovie: PropTypes.object,
  onPlayButtonClick: PropTypes.func,
};
