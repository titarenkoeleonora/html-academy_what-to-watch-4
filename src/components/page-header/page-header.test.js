import React from "react";
import renderer from "react-test-renderer";
import PageHeader from "./page-header";

it(`Correctly PageFooter render`, () => {
  const tree = renderer
    .create(
        <PageHeader />
    );

  expect(tree).toMatchSnapshot();
});
