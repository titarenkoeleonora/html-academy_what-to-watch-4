import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`,
};

ReactDOM.render(
    <App
      title={Movie.TITLE}
      genre={Movie.GENRE}
      date={Movie.DATE}
    />,
    document.querySelector(`#root`)
);
