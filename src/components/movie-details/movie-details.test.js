import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bgImage`,
  src: ``,
  rating: `8,9`,
  ratingDescription: `Very good`,
  votes: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  runTime: `1h 39m`,
};

it(`Correctlt render`, () => {
  const tree = renderer
    .create(
        <MovieDetails
          movie={testMovie}
        />
    );

  expect(tree).toMatchSnapshot();
});
