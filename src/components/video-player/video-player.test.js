import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const testData = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `poster`,
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
