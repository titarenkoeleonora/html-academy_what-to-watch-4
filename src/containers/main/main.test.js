import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MAX_SHOWN_MOVIES} from "../../constants.js";

const mockStore = configureStore([]);

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bgImage`,
  src: ``,
};

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `1`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `2`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `3`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `4`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `5`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `6`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: `7`,
    title: `movie title`,
    poster: `image`,
    src: ``,
  }
];

const mock = {
  activeGenre: `All genres`,
  genres: [`Family`, `Comedian`, `Drama`],
};

it(`Main correctly render`, () => {
  const store = mockStore({
    activeGenre: `All genres`,
    movies: testMovies,
    shownMoviesCount: MAX_SHOWN_MOVIES,
    activeMovie: testMovie,
    isMovieVideoplayerActive: false,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            movie={testMovie}
            activeMovie={testMovie}
            movies={testMovies}
            activeGenre={mock.activeGenre}
            onGenreTabClick={() => {}}
            onMovieCardClick={() => {}}
            onPlayButtonClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
