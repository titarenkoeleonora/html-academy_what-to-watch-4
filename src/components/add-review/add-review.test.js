import React from "react";
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history';
import AddReview from './add-review';
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";
import {SubmitStatus} from "../../constants";

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

const testUserData = {
  id: 0,
  name: ``,
  email: ``,
  avatar: ``,
};

it(`AddReview page should render with submit button active`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      activeMovie: testMovie,
      movies: [],
      reviews: [],
      favoriteMovies: [],
      isError: false,
      submitStatus: SubmitStatus.DEFAULT,
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
          <Router history={history}>
            <AddReview
              authorizationStatus={`AUTH`}
              id={1}
              authorizationInfo={testUserData}
              activeMovie={testMovie}
              onSubmitClick={() => {}}
              onReviewChange={() => {}}
              onRatingChange={() => {}}
              isFormDisabled={false}
              submitStatus={SubmitStatus.DEFAULT}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
