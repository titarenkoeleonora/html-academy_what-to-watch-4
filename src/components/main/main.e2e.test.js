import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

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
    src: ``,
    genre: `genre`,
  },
  {
    id: `1`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
  },
  {
    id: `2`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
  },
  {
    id: `3`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
  },
  {
    id: `4`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
  },
  {
    id: `5`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
  },
  {
    id: `6`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
  },
  {
    id: `7`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title pressed`, () => {
  const activeGenre = `All genres`;
  const store = mockStore({
    activeGenre: `All genres`,
    movies: testMovies,
  });

  const handleMovieCardClick = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main
          movie={testMovie}
          movies={testMovies}
          activeGenre={activeGenre}
          onGenreTabClick={() => {}}
          onMovieCardClick={handleMovieCardClick}
        />
      </Provider>
  );

  const movieTitles = main.find(`a.small-movie-card__link`);

  movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

  expect(handleMovieCardClick).toHaveBeenCalledTimes(testMovies.length);
});
