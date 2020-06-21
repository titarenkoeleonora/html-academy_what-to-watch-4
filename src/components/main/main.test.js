import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const testMovie = {
  TITLE: `Movie title`,
  GENRE: `Genre`,
  DATE: 2020,
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

it(`Main correctly render`, () => {
  const tree = renderer
    .create(
        <Main
          title={testMovie.TITLE}
          genre={testMovie.GENRE}
          date={testMovie.DATE}
          movies={testMovies}
          onMovieTitleClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
