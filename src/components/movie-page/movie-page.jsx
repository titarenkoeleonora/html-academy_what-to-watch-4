import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab.js";
import Tabs from "../../components/tabs/tabs.jsx";
import PageHeader from "../../components/page-header/page-header.jsx";
import PageFooter from "../../components/page-footer/page-footer.jsx";
import RelatedMovies from "../../components/related-movies/related-movies.jsx";
import {getReviews, getMovies} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {AppStateActionCreator} from "../../reducer/actions/app-state-action-creator.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import MovieCardButtons from "../../components/movie-card-buttons/movie-card-buttons.jsx";
import ErrorScreen from "../../components/error-screen/error-screen.jsx";
import {getIsReviewOpen, getActiveMovieById} from "../../reducer/app-state/selectors.js";
import {MAX_RELATED_MOVIES_COUNT} from "../../constants.js";

const TabsWrapped = withActiveTab(Tabs);


class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this._getRelatedMovies = this._getRelatedMovies.bind(this);
  }

  componentDidMount() {
    const {id, onLoadReviews} = this.props;

    onLoadReviews(id);
  }

  _getRelatedMovies() {
    const {movies, activeMovie} = this.props;

    return (movies
      .filter((movie) => movie.title !== activeMovie.title && movie.genre === activeMovie.genre)
      .slice(0, MAX_RELATED_MOVIES_COUNT)
    );
  }

  render() {
    const {
      activeMovie,
      onMovieCardClick,
      onPlayButtonClick,
      reviews,
      authorizationStatus,
    } = this.props;

    if (!activeMovie) {
      return <ErrorScreen/>;
    }

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
                  relatedMovies={this._getRelatedMovies()}
                  onMovieCardClick={onMovieCardClick}
                />
              </section>
              <PageFooter/>
            </div>
          </>
    );
  }
}

MoviePage.propTypes = {
  id: PropTypes.number.isRequired,
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
  }),
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
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
  isReviewOpen: PropTypes.bool.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  onLoadReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  activeMovie: getActiveMovieById(state, props.id),
  movies: getMovies(state),
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
  isReviewOpen: getIsReviewOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(activeMovie) {
    dispatch(DataOperation.loadReviews(activeMovie.id));
    dispatch(AppStateActionCreator.getActiveMovie(activeMovie));
  },
  onReviewSubmit(movieId, review) {
    dispatch(DataOperation.postReview(movieId, review));
  },
  onLoadReviews(id) {
    dispatch(DataOperation.loadReviews(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
