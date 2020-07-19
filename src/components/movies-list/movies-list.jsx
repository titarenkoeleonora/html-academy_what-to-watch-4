import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withActiveVideo from "../../hocs/with-active-video/with-active-video.js";

const SmallMovieCardWrapped = withActiveVideo(SmallMovieCard);

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
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};
 export default MoviesList;
