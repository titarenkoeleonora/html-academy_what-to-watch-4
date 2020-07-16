import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = ({onShowMoreButtonClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreButtonClick}
      >Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
