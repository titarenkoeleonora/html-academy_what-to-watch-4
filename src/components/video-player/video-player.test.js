import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const testData = {
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

it(`Video player correctly render`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          isPlaying={false}
          movie={testData}
          muted
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
