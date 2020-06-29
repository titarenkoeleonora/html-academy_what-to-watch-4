import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {poster, source} = this.props;
    const video = this._videoRef.current;

    if (video) {
      video.src = source;
      video.image = poster;
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.src = ``;
      video.image = ``;
      clearTimeout(this._playTimeout);
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {poster, source} = this.props;

    return (
      <>
        <video
          width="100%"
          height="100%"
          ref={this._videoRef}
          src={source}
          poster={poster}
          muted
        />
      </>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
