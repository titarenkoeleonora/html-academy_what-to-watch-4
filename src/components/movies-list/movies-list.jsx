import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredMovie: null,
    };

    this.onMovieCardHover = this.onMovieCardHover.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMovieCardHover(movie) {
    this.setState({
      hoveredMovie: movie,
    });
  }

  onMouseOut() {
    this.setState({
      hoveredMovie: null,
    });
  }

  render() {
    const {movies, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <SmallMovieCard
            key={movie.id}
            movie={movie}
            onMovieCardClick={onMovieCardClick}
            onMovieCardHover={this.onMovieCardHover}
            onMouseOut = {this.onMouseOut}
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
  onMovieCardClick: PropTypes.func.isRequired,
};