import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Movie} from "./constants.js";
import {movies} from "./mocks/movies.js";
import reviews from './mocks/reviews';

ReactDOM.render(
    <App
      movie={Movie}
      movies={movies}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
