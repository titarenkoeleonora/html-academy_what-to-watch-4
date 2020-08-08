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
  relatedMovies: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  onMovieCardClick: PropTypes.func.isRequired,
};

export default RelatedMovies;
