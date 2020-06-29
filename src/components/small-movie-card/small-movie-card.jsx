import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._movie = this.props.movie;
    this._onMovieCardClick = this.props.onMovieCardClick;

    this.state = {
      isPlaying: false,
    };

    this._handleMovieTitleClick = this._handleMovieTitleClick.bind(this);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this);
  }

  _handleMovieTitleClick(evt) {
    evt.preventDefault();

    this._onMovieCardClick(this._movie);
  }

  _handleMouseOver() {
    this.setState({
      isPlaying: true,
    });
  }

  _handleMouseOut() {
    this.setState({
      isPlaying: false,
    });
  }

  render() {
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handleMouseOut}
        onClick={this._handleMovieTitleClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isPlaying}
            movie={this._movie}
            muted
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link" href="movie-page.html"
          >{this._movie.title}</a>
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
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};
