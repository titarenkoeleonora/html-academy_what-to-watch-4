import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

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

const genresList = [`All genres`, `Drama`, `Comedy`, `Thriller`];

it(`render GenresList`, () => {
  const tree = renderer
    .create(
        <GenresList
          activeGenre={`All genres`}
          onGenreTabClick={()=>{}}
          movies={testMovies}
          genres={genresList}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
