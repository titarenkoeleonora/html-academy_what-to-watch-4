import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import {MAX_SHOWN_MOVIES, ALL_GENRES_GENRE} from "../../constants.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

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

const mock = {
  activeGenre: ALL_GENRES_GENRE,
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
      activeGenre: ALL_GENRES_GENRE,
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
