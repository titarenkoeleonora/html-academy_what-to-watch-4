import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {Movie, MOVIES_TITLES} from "../../constants";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title pressed`, () => {
  const onMovieTitleClick = jest.fn();

  const main = shallow(
      <Main
        title={Movie.TITLE}
        genre={Movie.GENRE}
        date={Movie.DATE}
        moviesTitles={MOVIES_TITLES}
        onMovieTitleClick={() => {}}
      />
  );

  const movieTitles = main.find(`small-movie-card__link`);

  movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

  expect(onMovieTitleClick.mock.calls.length).toBe(movieTitles.length);
});
