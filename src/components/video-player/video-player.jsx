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
      video.src = movie.previewVideoLink;
      video.poster = movie.previewImage;
      video.muted = muted;
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.src = ``;
      video.poster = ``;
      video.muted = null;
    }
    clearTimeout(this._playTimeout);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this._playTimeout);
    }
  }

  render() {
    const {movie} = this.props;

    return (
      <video
        width="280"
        height="175"
        ref={this._videoRef}
        src={movie.previewVideoLink}
        poster={movie.previewImage}
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    previewImage: PropTypes.string,
    previewVideoLink: PropTypes.string
  }).isRequired,
};
