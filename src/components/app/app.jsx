import React from "react";
import PropTypes from 'prop-types';

import Main from "../main/main.jsx";

const movieTitleHandler = () => {};

const App = (props) => {
  const {title, genre, date, movies} = props;

  return (
    <Main
      title={title}
      genre={genre}
      date={date}
      movies={movies}
      onMovieTitleClick={movieTitleHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

export default App;
