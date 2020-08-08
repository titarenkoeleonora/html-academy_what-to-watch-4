import React from "react";
import renderer from "react-test-renderer";
import MovieVideoplayer from "./movie-videoplayer";

const testMovie = {
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
};

it(`Full Screen Player should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieVideoplayer
          isPlaying={false}
          progress={10}
          duration={99}
          onPlayButtonClick={() => {}}
          onFullScreenButtonClick={() => {}}
          onExitButtonClick={() => {}}
          activeMovie={testMovie}
        >
          <video />
        </MovieVideoplayer>).toJSON();

  expect(tree).toMatchSnapshot();
});
