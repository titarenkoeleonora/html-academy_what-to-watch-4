import React from "react";
import renderer from "react-test-renderer";
import RelatedMovies from "./related-movies";
import {Router} from "react-router-dom";
import history from "../../history";

const testMovies = [
  {
    id: 0,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: 1,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: 2,
    title: `movie title`,
    poster: `image`,
    src: ``,
  }
];

it(`RelatedMovies should render correctly`, () => {
  const tree = renderer
      .create(
          <Router history={history}>
            <RelatedMovies
              relatedMovies={testMovies}
              onMovieCardClick={() => {}}
            />
          </Router>
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
