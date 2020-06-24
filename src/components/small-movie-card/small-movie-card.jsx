import React from "react";
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {movie, onMovieCardHover, onMouseOut, onMovieCardClick} = props;

  const handleMovieTitleClick = (evt) => {
    evt.preventDefault();

    onMovieCardClick(movie);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onMovieCardHover}
      onMouseOut={onMouseOut}
      onClick={handleMovieTitleClick}
    >
      <div className="small-movie-card__image">
        <img src={movie.image} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link" href="movie-page.html"
        >{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
