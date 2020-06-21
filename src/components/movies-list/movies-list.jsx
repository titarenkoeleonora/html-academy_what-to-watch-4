import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredMovie: null,
    };
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <SmallMovieCard
            key={movie.id}
            movie={movie}
            onMovieTitleClick={onMovieTitleClick}
            onMovieCardHover={() => {
              this.setState({
                hoveredMovie: movie,
              });
            }}
          />
        ))}
      </div>
    );
  }
}

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
