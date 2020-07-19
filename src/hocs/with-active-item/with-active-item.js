import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this._handleOnItemClick = this._handleOnItemClick.bind(this);
    }

    _handleOnItemClick(clickedItem) {
      this.setState = ({
        activeItem: clickedItem,
      });
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          onItemClick={this._handleOnItemClick}
          activeItem={activeItem}
        >
        </Component>
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
