import React from "react";
import renderer from "react-test-renderer";
import ErrorScreen from "./error-screen";

it(`Correctly ErrorScreen render`, () => {
  const tree = renderer
    .create(
        <ErrorScreen />
    );

  expect(tree).toMatchSnapshot();
});
