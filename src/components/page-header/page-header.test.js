import React from "react";
import renderer from "react-test-renderer";
import PageHeader from "./page-header";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user";

const mockStore = configureStore([]);

it(`Correctly PageFooter render`, () => {
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
        <Provider store={store}>
          <PageHeader
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            isAuthorizing={false}
            authorizationInfo={{
              id: 0,
              email: ``,
              name: ``,
              avatar: ``,
            }}
          />
        </Provider>
    );

  expect(tree).toMatchSnapshot();
});
