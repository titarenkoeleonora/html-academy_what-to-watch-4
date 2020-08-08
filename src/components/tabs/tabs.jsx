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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.object.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ),
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
