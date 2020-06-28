import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this.isPlaying = this.props.isPlaying;
  }

  componentDidMount() {
    const {image, previewSrc} = this.props;
    const video = this._videoRef.current;

    video.src = previewSrc;
    video.image = image;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.image = ``;
    video.onplay = null;
  }

  render() {
    const {image, previewSrc} = this.props;

    return (
      <>
        <video
          ref={this._videoRef}
          src={previewSrc}
          poster={image}
          muted
        />
      </>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  previewSrc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
