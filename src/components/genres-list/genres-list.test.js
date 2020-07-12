import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";
import {getGenresList} from "../../utils.js";

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `1`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `2`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `3`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `4`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `5`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `6`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `7`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  }
];

const genres = getGenresList(testMovies);

it(`render GenresList`, () => {
  const tree = renderer
    .create(
        <GenresList
          activeGenre={`All genres`}
          onGenreTabClick={()=>{}}
          movies={testMovies}
          genres={genres}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
