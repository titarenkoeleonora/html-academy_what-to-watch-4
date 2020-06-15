import React from "react";
import PropTypes from 'prop-types';

import Main from "../main/main.jsx";

const movieTitleHandler = () => {};

const App = (props) => {
  const {title, genre, date, moviesTitles} = props;

  return (
    <Main
      title={title}
      genre={genre}
      date={date}
      moviesTitles={moviesTitles}
      onMovieTitleClick={movieTitleHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  moviesTitles: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;
