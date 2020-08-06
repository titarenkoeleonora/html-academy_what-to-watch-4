import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import {MAX_SHOWN_MOVIES} from "../../constants.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

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
      isReviewOpen: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthorizing: false,
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      }
    }
  });

  const tree = renderer
    .create(
        <Router history={history}>
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
              isReviewOpen={() => {}}
            />
          </Provider>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
