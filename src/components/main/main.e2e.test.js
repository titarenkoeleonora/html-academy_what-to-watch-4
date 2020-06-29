import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
};

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    poster: `image`,
  },
  {
    id: `1`,
    title: `movie title`,
    poster: `image`,
  },
  {
    id: `2`,
    title: `movie title`,
    poster: `image`,
  },
  {
    id: `3`,
    title: `movie title`,
    poster: `image`,
  },
  {
    id: `4`,
    title: `movie title`,
    poster: `image`,
  },
  {
    id: `5`,
    title: `movie title`,
    poster: `image`,
  },
  {
    id: `6`,
    title: `movie title`,
    poster: `image`,
  },
  {
    id: `7`,
    title: `movie title`,
    poster: `image`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title pressed`, () => {
  const handleMovieCardClick = jest.fn();

  const main = mount(
      <Main
        movie={testMovie}
        movies={testMovies}
        onMovieCardClick={handleMovieCardClick}
      />
  );

  const movieTitles = main.find(`a.small-movie-card__link`);

  movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

  expect(handleMovieCardClick).toHaveBeenCalledTimes(testMovies.length);
});
