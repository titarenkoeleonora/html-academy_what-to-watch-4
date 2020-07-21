import React from "react";
import ReactDOM from "react-dom";
import {Movie} from "./constants.js";
import {moviesMock} from "./mocks/movies.js";
import reviews from './mocks/reviews';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer/reducer.js";
import {App} from "./components/app/app.jsx";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
ReactDOM.render(
    <Provider store={store}>
      <App
        movie={Movie}
        movies={moviesMock}
        reviews={reviews}
      />
    </Provider>,

    document.querySelector(`#root`)
);
