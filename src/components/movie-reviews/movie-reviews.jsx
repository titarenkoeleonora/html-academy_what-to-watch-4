import React from "react";
import PropTypes from 'prop-types';
import {formatDate} from "../../utils";
import {FormatRule} from "../../constants";

const createReviewMarkup = (review) => (
  <div key={review.id} className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{review.user.name}</cite>
        <time className="review__date" dateTime={formatDate(review.date, FormatRule.DATE_HIDE)}>{formatDate(review.date, FormatRule.DATE)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{review.rating}</div>
  </div>
);

const MovieReviews = ({reviews}) => {
  const halfReviews = reviews.length / 2;
  const firstColumn = reviews.slice(0, halfReviews);
  const secondColumn = reviews.slice(halfReviews);

  const renderReviews = (reviewColumn) => reviewColumn.map(createReviewMarkup);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReviews(firstColumn)}
      </div>
      <div className="movie-card__reviews-col">
        {renderReviews(secondColumn)}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.object.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ),
};

export default MovieReviews;
