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
import {MovieCardButtons} from "../../components/movie-card-buttons/movie-card-buttons.jsx";
import {Operation} from "../../reducer/data/data.js";

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
    onPlayButtonClick,
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

              <MovieCardButtons onPlayButtonClick={onPlayButtonClick}/>
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
  promoMovie: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  activeGenre: PropTypes.string.isRequired,
  genresList: PropTypes.array.isRequired,
  shownMoviesCount: PropTypes.number,
  onGenreTabClick: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func,
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
    dispatch(Operation.loadReviews(activeMovie.id));
    dispatch(ActionCreator.getActiveMovie(activeMovie));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
