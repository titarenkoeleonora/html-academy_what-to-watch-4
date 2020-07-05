import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";

it(`Correctlt render`, () => {
  const tree = renderer
    .create(
        <MovieReviews/>
    );

  expect(tree).toMatchSnapshot();
});
