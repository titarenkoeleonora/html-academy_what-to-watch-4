import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {MOVIES_TITLES, Movie} from "./constants.js";

ReactDOM.render(
    <App
      title={Movie.TITLE}
      genre={Movie.GENRE}
      date={Movie.DATE}
      moviesTitles={MOVIES_TITLES}
    />,
    document.querySelector(`#root`)
);
