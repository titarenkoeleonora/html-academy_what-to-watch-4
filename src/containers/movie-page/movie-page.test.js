import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureStore([]);

const id = 0;

const testMovies = [
  {
    id: 0,
    title: `Movie title`,
    genre: `Genre`,
    date: 2020,
    poster: `image`,
    bgImage: `bgImage`,
    src: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
  },
  {
    id: 1,
    title: `Movie title`,
    genre: `Genre`,
    date: 2020,
    poster: `image`,
    bgImage: `bgImage`,
    src: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
  },
  {
    id: 2,
    title: `Movie title`,
    genre: `Genre`,
    date: 2020,
    poster: `image`,
    bgImage: `bgImage`,
    src: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
  }
];

const testReviews = [
  {
    id: 0,
    user: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  },
  {
    id: 1,
    user: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
];

it(`Should MoviePage correctly render`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      movies: testMovies,
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

  store.dispatch = jest.fn();

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <MoviePage
              id={id}
              movies={testMovies}
              reviews={testReviews}
              onMovieCardClick={() => {}}
            />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
