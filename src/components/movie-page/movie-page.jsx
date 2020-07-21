import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import RelatedMovies from "../related-movies/related-movies.jsx";
import Tabs from "../tabs/tabs.jsx";
import {ActionCreator} from "../../reducer/action-creator.js";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab.js";

const TabsWrapped = withActiveTab(Tabs);

const MoviePage = ({activeMovie, movies, onMovieCardClick, reviews}) => {

  return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={activeMovie.bgImage} alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{activeMovie.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{activeMovie.genre}</span>
                  <span className="movie-card__year">{activeMovie.date}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={activeMovie.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <TabsWrapped
                activeMovie={activeMovie}
                reviews={reviews}
              />

            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <RelatedMovies
              currentMovie={activeMovie}
              movies={movies}
              onMovieCardClick={onMovieCardClick}
            />
          </section>
          <PageFooter/>
        </div>
      </>
  );
};

MoviePage.propTypes = {
  activeMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({activeMovie}) => ({activeMovie});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(activeMovie) {
    dispatch(ActionCreator.getActiveMovie(activeMovie));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
