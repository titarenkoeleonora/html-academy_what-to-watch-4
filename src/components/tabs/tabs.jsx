import React from "react";
import PropTypes from 'prop-types';

const Tabs = ({tabs, activeTab, onTabClick}) => {
  const navTabs = Object.values(tabs);

  return (
    <ul className="movie-nav__list">
      {navTabs.map((tab) => {
        return (
          <li
            className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}
            key={tab}
          >
            <a
              href="#"
              className="movie-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                onTabClick(tab);
              }}
            >{tab}</a>
          </li>
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.shape({
    OVERVIEW: PropTypes.string.isRequired,
    DETAILS: PropTypes.string.isRequired,
    REVIEWS: PropTypes.string.isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
