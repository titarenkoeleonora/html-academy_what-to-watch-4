import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {movies, onMovieTitleClick} = props;
  const hoverCardHandler = () => {};

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <SmallMovieCard
          key={movie.id}
          movie={movie}
          onMovieTitleClick={onMovieTitleClick}
          onMovieCardHover={hoverCardHandler}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
