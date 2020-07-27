import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from 'prop-types';

const RelatedMovies = ({relatedMovies, onMovieCardClick}) => {

  return (
    <MoviesList
      movies={relatedMovies}
      onMovieCardClick={onMovieCardClick}
    />
  );
};

RelatedMovies.propTypes = {
  relatedMovies: PropTypes.array.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default RelatedMovies;
