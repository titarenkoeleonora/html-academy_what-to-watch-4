import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  image: `image`,
  bgImage: `bgImage`,
};

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `1`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `2`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `3`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `4`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `5`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `6`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `7`,
    title: `movie title`,
    image: `image`,
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