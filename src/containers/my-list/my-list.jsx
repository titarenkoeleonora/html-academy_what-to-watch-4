import React from 'react';
import PropTypes from 'prop-types';
import {PageHeader} from '../../components/page-header/page-header';
import MoviesList from '../../components/movies-list/movies-list';
import PageFooter from '../../components/page-footer/page-footer';
import {connect} from 'react-redux';
import {getFavoriteMovies} from '../../reducer/data/selectors';

const MyList = ({favoriteMovies}) => {
  return (
    <div className="user-page">
      <PageHeader
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList
          movies={favoriteMovies}
          render={() => {}} />
      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  favoriteMovies: PropTypes.array,
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

export {MyList};
export default connect(mapStateToProps)(MyList);
