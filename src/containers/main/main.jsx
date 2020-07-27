import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import MoviesList from "../../components/movies-list/movies-list.jsx";
import GenresList from "../../components/genres-list/genres-list.jsx";
import ShowMoreButton from "../../components/show-more-button/show-more-button.jsx";
import PageFooter from "../../components/page-footer/page-footer.jsx";
import PageHeader from "../../components/page-header/page-header.jsx";
import {ActionCreator} from "../../reducer/actions/action-creator.js";
import {getMovies, getGenresList} from "../../reducer/data/selectors.js";
import {getActiveGenre, getShownMoviesCount} from "../../reducer/app-state/selectors.js";

const Main = (props) => {
  const {
    promoMovie,
    movies,
    activeGenre,
    genresList,
    shownMoviesCount,
    onGenreTabClick,
    onMovieCardClick,
    onShowMoreButtonClick,
    onPlayButtonClick
  } = props;

  const shownMovies = movies.slice(0, shownMoviesCount);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg" style={{background: promoMovie.backgroundColor}}>
          <img src={promoMovie.bgImage} alt={promoMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster} alt={promoMovie.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.date}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={onPlayButtonClick}
                  className="btn btn--play movie-card__button"
                  type="button">
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
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  activeGenre: PropTypes.string.isRequired,
  genresList: PropTypes.array.isRequired,
  shownMoviesCount: PropTypes.number.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeGenre: getActiveGenre(state),
    movies: getMovies(state),
    shownMoviesCount: getShownMoviesCount(state),
    genresList: getGenresList(state)
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
