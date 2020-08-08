import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideo from "../../hocs/with-video/with-video.js";

const SmallMovieCardWrapped = withVideo(SmallMovieCard);

const MoviesList = ({movies, onMovieCardClick}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <SmallMovieCardWrapped
          key={movie.id}
          movie={movie}
          onMovieCardClick={onMovieCardClick}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
