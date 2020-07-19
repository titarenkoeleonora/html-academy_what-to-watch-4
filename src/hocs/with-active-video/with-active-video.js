import React, {PureComponent} from "react";

const withActiveVideo = (Component) => {
  class WithActiveVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      }

    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this);
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
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onSmallCardMouseOver={this._handleMouseOver}
          onSmallCardMouseOut={this._handleMouseOut}
        >
        </Component>
      );
    }
  }

  return WithActiveVideo;
};

export default withActiveVideo;
