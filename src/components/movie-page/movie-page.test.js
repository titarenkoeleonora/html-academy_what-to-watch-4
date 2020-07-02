import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bg-image`,
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

it(`Should MoviePage correctly render`, () => {
  const tree = renderer
    .create(
        <MoviePage
          movie={testMovie}
          movies={testMovies}
          onMovieCardClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
