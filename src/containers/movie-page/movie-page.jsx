import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab.js";
import Tabs from "../../components/tabs/tabs.jsx";
import PageHeader from "../../components/page-header/page-header.jsx";
import PageFooter from "../../components/page-footer/page-footer.jsx";
import RelatedMovies from "../../components/related-movies/related-movies.jsx";
import {getReviews, getMovies} from "../../reducer/data/selectors.js";
import {Operation} from "../../reducer/data/data.js";
import {AppStateActionCreator} from "../../reducer/actions/app-state-action-creator.js";
import {getRelatedMovies} from "../../utils.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import MovieCardButtons from "../../components/movie-card-buttons/movie-card-buttons.jsx";

const TabsWrapped = withActiveTab(Tabs);

const MoviePage = ({
  id,
  movies,
  onMovieCardClick,
  onPlayButtonClick,
  reviews,
  authorizationStatus}) => {

  const activeMovie = movies.find((movie) => movie.id === id);
  const relatedMovies = getRelatedMovies(movies, activeMovie);
  console.log(activeMovie);
  return (
      <>
        <section className="movie-card movie-card--full" style={{background: activeMovie.backgroundColor}}>
          <div className="movie-card__hero" >
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

                <MovieCardButtons
                  activeMovie={activeMovie}
                  onPlayButtonClick={onPlayButtonClick}
                  authorizationStatus={authorizationStatus}/>
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
              relatedMovies={relatedMovies}
              onMovieCardClick={onMovieCardClick}
            />
          </section>
          <PageFooter/>
        </div>
      </>
  );
};
MoviePage.propTypes = {
  id: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.object.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ),
  onMovieCardClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  movies: getMovies(state),
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});
const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(activeMovie) {
    dispatch(Operation.loadReviews(activeMovie.id));
    dispatch(AppStateActionCreator.getActiveMovie(activeMovie));
  }
});
export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
