import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

const GenresList = ({genres, activeGenre, onGenreTabClick}) => {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li
            className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}
            key={genre + index}
          >
            <a href="#" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreTabClick(genre);
              }}
            >{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(ActionCreator.activeGenre(activeGenre));
    dispatch(ActionCreator.getMoviesByGenre(activeGenre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
