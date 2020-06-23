import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Movie} from "./constants.js";
import {movies} from "./mocks/movies.js";

ReactDOM.render(
    <App
      movie={Movie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
