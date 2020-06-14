import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {MOVIES_TITLES, Movie} from "../../constants.js";

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          title={Movie.TITLE}
          genre={Movie.GENRE}
          date={Movie.DATE}
          moviesTitles={MOVIES_TITLES}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
