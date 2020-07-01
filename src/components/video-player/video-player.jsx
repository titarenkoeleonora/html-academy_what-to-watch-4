import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {movie, muted} = this.props;
    const video = this._videoRef.current;

    if (video) {
      video.src = movie.src;
      video.image = movie.poster;
      video.muted = muted;
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.src = ``;
      video.image = ``;
      video.muted = null;
    }
  }

  render() {
    const {movie} = this.props;
    return (
      <>
        <video
          width="280"
          height="175"
          ref={this._videoRef}
          src={movie.src}
          poster={movie.poster}
        />
      </>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
};
