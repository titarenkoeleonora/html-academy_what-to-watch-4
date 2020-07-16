import React from "react";
import renderer from "react-test-renderer";
import PageFooter from "./page-footer";

it(`Correctly PageFooter render`, () => {
  const tree = renderer
    .create(
        <PageFooter />
    );

  expect(tree).toMatchSnapshot();
});
