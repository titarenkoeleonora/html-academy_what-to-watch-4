import React from "react";
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AddReview} from './add-review';
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";

const mockStore = configureStore([]);

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bgImage`,
  src: ``,
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
