import React, {PureComponent} from "react";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        duration: 0,
        time: 0,
      };

      this._handleOnOffChange = this._handleOnOffChange.bind(this);
    }

    _handleOnOffChange() {
      this.setState({
        isPlaying: !this.state.isPlaying,
      });
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onSmallCardMouseOver={this._handleOnOffChange}
          onSmallCardMouseOut={this._handleOnOffChange}
        >
        </Component>
      );
    }
  }

  return WithVideo;
};

export default withVideo;
