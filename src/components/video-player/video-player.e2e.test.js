import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

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
