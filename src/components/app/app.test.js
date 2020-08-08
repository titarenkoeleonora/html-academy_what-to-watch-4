import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const mockStore = configureStore([]);

const testMovie = {
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

const testMovies = [
  {
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
  },
  {
    id: 1,
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
  },
  {
    id: 2,
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
      isReviewOpen: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthorizing: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            promoMovie={testMovie}
            activeMovie={testMovie}
            movies={testMovies}
            onLogin={() => {}}
            isMovieVideoplayerActive={false}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onPlayButtonClick={() => {}}
            onExitButtonClick={() => {}}
            onMovieCardClick={() => {}}
            onReviewSubmit={() => {}}
          />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
