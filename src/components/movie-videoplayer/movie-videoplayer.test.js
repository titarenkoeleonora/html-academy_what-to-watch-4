import React from "react";
import renderer from "react-test-renderer";
import MovieVideoplayer from "./movie-videoplayer";

const testMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
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
