import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants.js";
import history from "../../history.js";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieTitleClick = this._handleMovieTitleClick.bind(this);
  }

  _handleMovieTitleClick() {
    const {movie, onMovieCardClick} = this.props;

    history.push(`${AppRoute.MOVIE}/${movie.id}`);
    onMovieCardClick(movie);
  }

  render() {
    const {movie, isPlaying, onSmallCardMouseOver, onSmallCardMouseOut} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={this._handleMovieTitleClick}
        onMouseOver={onSmallCardMouseOver}
        onMouseOut={onSmallCardMouseOut}
      >

        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={isPlaying}
            movie={movie}
            muted
          />
        </div>
        <h3 className="small-movie-card__title"
          onClick={this._handleMovieTitleClick}
        >
          <Link className="small-movie-card__link"
            to={`${AppRoute.MOVIE}/${movie.id}`}
          >
            {movie.title}
          </Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  onSmallCardMouseOver: PropTypes.func.isRequired,
  onSmallCardMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
