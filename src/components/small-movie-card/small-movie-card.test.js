import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import {Router} from "react-router-dom";
import history from "../../history";

const testMovie = {
  id: 0,
  title: `movie title`,
  poster: `image`,
  src: ``,
};

it(`Small movie card correctly render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <SmallMovieCard
            movie={testMovie}
            isPlaying={false}
            onSmallCardMouseOver={() => {}}
            onSmallCardMouseOut={() => {}}
            onMovieCardClick={() => {}}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
