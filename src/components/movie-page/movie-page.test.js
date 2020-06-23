import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const testMovie = {
  TITLE: `Movie title`,
  GENRE: `Genre`,
  DATE: 2020,
  IMAGE: `image`,
  BG_IMAGE: `bg-image`
};

it(`Should MoviePage correctly render`, () => {
  const tree = renderer
    .create(
        <MoviePage
          movie={testMovie}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
