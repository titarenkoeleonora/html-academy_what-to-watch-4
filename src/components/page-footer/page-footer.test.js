import React from "react";
import renderer from "react-test-renderer";
import PageFooter from "./page-footer";
import {Router} from "react-router-dom";
import history from "../../history";

it(`Correctly PageFooter render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageFooter />
        </Router>
    );

  expect(tree).toMatchSnapshot();
});
