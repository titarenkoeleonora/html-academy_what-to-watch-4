import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import PrivateRoute from './private-route.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {MemoryRouter} from 'react-router';
import {AppRoute} from '../../constants.js';
import NameSpace from '../../reducer/name-space.js';
import {Provider} from 'react-redux';

const MockComponent = () => <div />;
const mockStore = configureStore([]);

describe(`PrivateRouteSnapshot`, () => {
  it(`should render Loader`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[AppRoute.MY_LIST]}>
            <PrivateRoute
              exact
              path={AppRoute.MY_LIST}
              authorizationStatus={AuthorizationStatus.AUTH}
              render={() => {
                return <MockComponent />;
              }}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render mock component`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[AppRoute.MY_LIST]}>
            <PrivateRoute
              exact
              path={AppRoute.MY_LIST}
              authorizationStatus={AuthorizationStatus.AUTH}
              render={() => {
                return <MockComponent />;
              }}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
