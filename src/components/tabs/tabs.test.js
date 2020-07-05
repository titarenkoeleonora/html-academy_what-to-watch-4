import React from "react";
import renderer from "react-test-renderer";
import {MovieTabs} from "../../constants";
import Tabs from "./tabs";

it(`Tabs correctly render`, () => {
  const tree = renderer
    .create(
        <Tabs
          tabs={MovieTabs}
          activeTab={MovieTabs.OVERVIEW}
          onTabClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

