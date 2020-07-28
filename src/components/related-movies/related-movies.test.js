import React from "react";
import renderer from "react-test-renderer";
import RelatedMovies from "./related-movies";

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
      .create(<RelatedMovies
        relatedMovies={testMovies}
        onMovieCardClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
