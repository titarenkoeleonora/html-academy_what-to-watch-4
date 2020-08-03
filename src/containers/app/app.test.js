import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const mockStore = configureStore([]);

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bgImage`,
  src: ``,
  starring: [],
};

const testMovies = [
  {
    id: 0,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    starring: [],
  },
  {
    id: 1,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    starring: [],
  },
  {
    id: 2,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    starring: [],
  }
];

it(`Render App`, () => {
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
        <Provider store={store}>
          <App
            movie={testMovie}
            activeMovie={testMovie}
            movies={testMovies}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
