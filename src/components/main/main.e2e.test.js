import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const testMovie = {
  TITLE: `Movie title`,
  GENRE: `Genre`,
  DATE: 2020,
};

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `1`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `2`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `3`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `4`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `5`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `6`,
    title: `movie title`,
    image: `image`,
  },
  {
    id: `7`,
    title: `movie title`,
    image: `image`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title pressed`, () => {
  const handleTitleClick = jest.fn();

  const main = mount(
      <Main
        title={testMovie.TITLE}
        genre={testMovie.GENRE}
        date={testMovie.DATE}
        movies={testMovies}
        onMovieTitleClick={handleTitleClick}
      />
  );

  const movieTitles = main.find(`a.small-movie-card__link`);

  movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

  expect(handleTitleClick).toHaveBeenCalledTimes(testMovies.length);
});
