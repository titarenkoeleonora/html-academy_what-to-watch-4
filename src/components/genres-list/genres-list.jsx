import React from "react";
import PropTypes from "prop-types";

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
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

export default GenresList;
