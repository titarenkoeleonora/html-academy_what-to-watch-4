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
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
  }

  _handleMovieTitleClick(evt) {
    evt.preventDefault();

    this._onMovieCardClick(this._movie);
  }

  _onMouseOver() {
    this.setState({
      isPlaying: true,
    });
  }

  _onMouseOut() {
    this.setState({
      isPlaying: false,
    });
  }

  render() {
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
        onClick={this._handleMovieTitleClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isPlaying}
            source={this._movie.src}
            poster={this._movie.poster}
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
  onMovieCardHover: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};
