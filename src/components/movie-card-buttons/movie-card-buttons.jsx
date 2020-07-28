import React from "react";
import PropTypes from 'prop-types';

export const MovieCardButtons = ({onPlayButtonClick}) => {
  return (
    <div className="movie-card__buttons">
      <button onClick={onPlayButtonClick}
        className="btn btn--play movie-card__button"
        type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </button>
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
  onPlayButtonClick: PropTypes.func,
};
