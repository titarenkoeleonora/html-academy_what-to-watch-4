import React from "react";
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews.text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews.author}</cite>
              <time className="review__date" dateTime="2016-12-24">{reviews.date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews.rating}</div>
        </div>

      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

export default MovieReviews;
