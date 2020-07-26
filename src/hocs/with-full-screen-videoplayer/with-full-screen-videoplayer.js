import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';

const withFullScreenVideoplayer = (Component) => {
  class WithFullScreenVideoplayer extends PureComponent {
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

    componentDidMount() {
      const video = this._videoRef.current;
      const {activeMovie} = this.props;

      video.src = activeMovie.src;
      video.poster = activeMovie.poster;
      video.play();

      video.oncanplaythrough = () => {
        this.setState({
          duration: video.duration,
        });
      };

      video.onloadedmetadata = () => this.setState({
        duration: Math.floor(video.duration)
      });

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false,
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime)
        });
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      if (video) {
        video.src = ``;
        video.image = ``;
        video.onloadedmetadata = null;
        video.ontimeupdate = null;
      }
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
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
      const {onExitButtonClick, activeMovie} = this.props;

      return (
        <Component
          {...this.props}
          activeMovie={activeMovie}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onSmallCardMouseOver={this._handleOnOffChange}
          onSmallCardMouseOut={this._handleOnOffChange}
          onPlayButtonClick={this._handleOnOffChange}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
          onExitButtonClick={onExitButtonClick}
        >
          <video
            className="player__video"
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithFullScreenVideoplayer.propTypes = {
    activeMovie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithFullScreenVideoplayer;
};

export default withFullScreenVideoplayer;
