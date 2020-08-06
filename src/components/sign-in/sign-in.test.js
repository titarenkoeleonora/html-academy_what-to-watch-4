import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {Router} from "react-router-dom";
import history from "../../history";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`Correctly SignIn render`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthorizing: false,
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      }},
  });

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <SignIn
              onSubmit={() => {}}
            />
          </Provider>

        </Router>
    );

  expect(tree).toMatchSnapshot();
});
