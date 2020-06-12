import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MOVIES_TITLES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: 2014,
};

ReactDOM.render(
    <App
      title={Movie.TITLE}
      genre={Movie.GENRE}
      date={Movie.DATE}
      moviesTitles={MOVIES_TITLES}
    />,
    document.querySelector(`#root`)
);

