import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Movie, MOVIES_TITLES} from "../../constants";

it(`Main correctly render`, () => {
  const tree = renderer
    .create(
        <Main
          title={Movie.TITLE}
          genre={Movie.GENRE}
          date={Movie.DATE}
          moviesTitles={MOVIES_TITLES}
          onMovieTitleClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
