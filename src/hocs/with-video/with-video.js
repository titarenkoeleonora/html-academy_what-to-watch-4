import React, {PureComponent, createRef} from "react";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
        duration: 0,
        progress: 0,
      };

      this._handleOnOffChange = this._handleOnOffChange.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    }


    _handleOnOffChange() {
      this.setState({
        isPlaying: !this.state.isPlaying,
      });
    }

    _handleFullScreenButtonClick() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    render() {
      const {isPlaying, duration, progress} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onSmallCardMouseOver={this._handleOnOffChange}
          onSmallCardMouseOut={this._handleOnOffChange}
          onPlayButtonClick={this._handleOnOffChange}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
        >
          <video
            className="player__video"
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  return WithVideo;
};

export default withVideo;
