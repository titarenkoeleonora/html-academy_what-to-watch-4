import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from "./containers/app/app.jsx";
import {createAPI} from "./api.js";
import thunk from "redux-thunk";
import {Operation as DataOperation} from "./reducer/data/data.js";
import reducer from "./reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(DataOperation.loadActiveMovie());
store.dispatch(DataOperation.loadMovies());

ReactDOM.render(
    <Provider store={store}>
      <App
      />
    </Provider>,

    document.querySelector(`#root`)
);
