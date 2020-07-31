import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
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
    id: 0,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: 1,
    title: `movie title`,
    poster: `image`,
    src: ``,
  },
  {
    id: 2,
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
    [NameSpace.DATA]: {
      promoMovie: testMovie,
      movies: testMovies,
      isError: false,
    },
    [NameSpace.APP_STATE]: {
      activeGenre: `All genres`,
      activeMovie: testMovie,
      isMovieVideoplayerActive: false,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            promoMovie={testMovie}
            activeMovie={testMovie}
            movies={testMovies}
            activeGenre={mock.activeGenre}
            shownMoviesCount={MAX_SHOWN_MOVIES}
            onGenreTabClick={() => {}}
            onMovieCardClick={() => {}}
            onPlayButtonClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
