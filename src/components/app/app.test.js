import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bgImage`,
  src: ``,
};

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `1`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `2`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `3`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `4`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `5`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `6`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `7`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          movie={testMovie}
          movies={testMovies}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
