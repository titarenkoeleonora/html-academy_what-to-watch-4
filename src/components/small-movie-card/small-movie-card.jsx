import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._onMovieCardClick = this.props.onMovieCardClick;
    this._handleMovieTitleClick = this._handleMovieTitleClick.bind(this);
  }

  _handleMovieTitleClick(evt) {
    evt.preventDefault();

    this._movie = this.props.movie;
    this._onMovieCardClick(this._movie);
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
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link" href="movie-page.html"
          >{movie.title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onSmallCardMouseOver: PropTypes.func.isRequired,
  onSmallCardMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
