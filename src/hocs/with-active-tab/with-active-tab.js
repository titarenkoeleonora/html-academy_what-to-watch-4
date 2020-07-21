import React, {PureComponent} from "react";
import {MovieTabs} from "../../constants";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: MovieTabs.OVERVIEW,
      };

      this._handleOnItemClick = this._handleOnItemClick.bind(this);
    }

    _handleOnItemClick(clickedItem) {
      console.log(clickedItem);
      this.setState = ({
        activeTab: clickedItem,
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onTabClick={this._handleOnItemClick}
        >
        </Component>
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
