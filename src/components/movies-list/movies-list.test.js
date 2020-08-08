import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";
import {Router} from "react-router-dom";
import history from "../../history";

const testMovies = [
  {
    id: 0,
    title: `Movie title`,
    poster: ``,
    previewImage: ``,
    bgImage: ``,
    backgroundColor: ``,
    src: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
    genre: `Genre`,
    date: 2020,
    isFavorite: true,
  },
  {
    id: 1,
    title: `Movie title`,
    poster: ``,
    previewImage: ``,
    bgImage: ``,
    backgroundColor: ``,
    src: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
    genre: `Genre`,
    date: 2020,
    isFavorite: true,
  },
  {
    id: 2,
    title: `Movie title`,
    poster: ``,
    previewImage: ``,
    bgImage: ``,
    backgroundColor: ``,
    src: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
    genre: `Genre`,
    date: 2020,
    isFavorite: true,
  }
];

it(`MoviesList should render correctly`, () => {
  const tree = renderer
      .create(
          <Router history={history}>
            <MoviesList
              movies={testMovies}
              onMovieCardClick={() => {}}
            />
          </Router>
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
