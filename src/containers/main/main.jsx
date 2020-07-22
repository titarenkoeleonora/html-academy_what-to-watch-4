import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getGenresList, fiterMoviesByGenre} from "../../utils.js";
import {moviesMock} from "../../mocks/movies.js";
import MoviesList from "../../components/movies-list/movies-list.jsx";
import GenresList from "../../components/genres-list/genres-list.jsx";
import ShowMoreButton from "../../components/show-more-button/show-more-button.jsx";
import PageFooter from "../../components/page-footer/page-footer.jsx";
import {ActionCreator} from "../../reducer/action-creator.js";
import PageHeader from "../../components/page-header/page-header.jsx";

const genresList = getGenresList(moviesMock);

const Main = (props) => {
  const {movie, movies, activeGenre, shownMoviesCount, onGenreTabClick, onMovieCardClick, onShowMoreButtonClick} = props;
  const shownMovies = movies.slice(0, shownMoviesCount);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={movie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={movie.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.date}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={genresList}
            activeGenre={activeGenre}
            onGenreTabClick={onGenreTabClick}
          />

          <MoviesList
            movies={shownMovies}
            onMovieCardClick={onMovieCardClick}
          />
          {shownMovies.length < movies.length &&
            <ShowMoreButton
              onShowMoreButtonClick={onShowMoreButtonClick}
            />
          }
        </section>

        <PageFooter />
      </div>
    </>
  );
};

Main.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  activeGenre: PropTypes.string.isRequired,
  shownMoviesCount: PropTypes.number.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.activeGenre,
    movies: fiterMoviesByGenre(state.activeGenre, state.movies),
    shownMoviesCount: state.shownMoviesCount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(genre) {
    dispatch(ActionCreator.getActiveGenre(genre));
  },
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreMovies());
  },
  onMovieCardClick(activeMovie) {
    dispatch(ActionCreator.getActiveMovie(activeMovie));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
