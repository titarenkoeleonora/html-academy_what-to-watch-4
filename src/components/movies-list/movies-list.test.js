import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";

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

it(`MoviesList should render correctly`, () => {
  const tree = renderer
      .create(<MoviesList
        movies={testMovies}
        onMovieCardClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
