import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const testMovie = {
  id: `0`,
  title: `movie title`,
  image: `image`,
};

it(`Small movie card correctly render`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          movie={testMovie}
          onMovieCardHover={() => {}}
          onMovieTitleClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
