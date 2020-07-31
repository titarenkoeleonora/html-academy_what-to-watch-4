import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

const testData = {
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewImage: `poster`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayer should have a play state`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={false}
        movie={testData}
        muted
      />
  );

  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.load = () => {};

  videoPlayer.instance().componentDidMount();


  expect(videoPlayer.props().isPlaying).toBe(false);

  videoPlayer.setProps({isPlaying: true});
  expect(videoPlayer.props().isPlaying).toBe(true);
});
