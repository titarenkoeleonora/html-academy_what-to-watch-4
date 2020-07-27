import React from "react";
import PropTypes from 'prop-types';
import {MovieTabs} from "../../constants";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";

const renderMovieInfo = (activeMovie, reviews, activeTab) => {
  switch (activeTab) {
    case MovieTabs.OVERVIEW:
      return <MovieOverview movie={activeMovie}/>;
    case MovieTabs.DETAILS:
      return <MovieDetails movie={activeMovie}/>;
    case MovieTabs.REVIEWS:
      return <MovieReviews reviews={reviews}/>;
    default:
      return <MovieOverview movie={activeMovie}/>;
  }
};

const Tabs = ({activeMovie, reviews, activeTab, onTabClick}) => {
  const navTabs = Object.values(MovieTabs);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {navTabs.map((tab, index) => {

            return (
              <li
                className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}
                key={tab + index}
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
      </nav>

      {renderMovieInfo(activeMovie, reviews, activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  activeMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
