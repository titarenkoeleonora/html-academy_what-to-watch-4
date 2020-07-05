import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from 'prop-types';

const getRelatedMovies = (movies, currentMovie) => {
  const relatedMovies = movies.filter((movie) => {
    return movie.genre === currentMovie.genre;
  });

  return relatedMovies;
};

const RelatedMovies = ({currentMovie, movies, onMovieCardClick}) => {
  return (
    <MoviesList
      movies={getRelatedMovies(movies, currentMovie)}
      onMovieCardClick={onMovieCardClick}
    />
  );
};

RelatedMovies.propTypes = {
  currentMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default RelatedMovies;
