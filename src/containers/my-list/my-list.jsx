import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PageHeader} from '../../components/page-header/page-header';
import MoviesList from '../../components/movies-list/movies-list';
import PageFooter from '../../components/page-footer/page-footer';
import {connect} from 'react-redux';
import {getFavoriteMovies} from '../../reducer/data/selectors';
import {Operation as DataOperation} from '../../reducer/data/data';
import ErrorScreen from '../../components/error-screen/error-screen';
import {getAuthorizationStatus, getAuthorizationInfo} from '../../reducer/user/selectors';

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteMovies} = this.props;
    loadFavoriteMovies();
  }

  render() {
    const {favoriteMovies, authorizationInfo, authorizationStatus, onMovieCardClick} = this.props;
    console.log(favoriteMovies);
    if (!favoriteMovies) {
      return <ErrorScreen />;
    }

    return (
      <div className="user-page">
        <PageHeader
          authorizationStatus={authorizationStatus}
          authorizationInfo={authorizationInfo}>
          <h1 className="page-title user-page__title">My list</h1>
        </PageHeader>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesList
            movies={favoriteMovies}
            onMovieCardClick={onMovieCardClick}
          />
        </section>

        <PageFooter />
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteMovies: PropTypes.array,
  onMovieCardClick: PropTypes.func.isRequired,
  loadFavoriteMovies: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteMovies() {
    dispatch(DataOperation.loadFavoriteMovies());
  },
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
