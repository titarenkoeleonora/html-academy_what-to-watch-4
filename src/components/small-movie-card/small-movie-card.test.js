import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const testMovie = {
  id: 0,
  title: `movie title`,
  poster: `image`,
  src: ``,
};

it(`Small movie card correctly render`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          movie={testMovie}
          isPlaying={false}
          onSmallCardMouseOver={() => {}}
          onSmallCardMouseOut={() => {}}
          onMovieCardClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
