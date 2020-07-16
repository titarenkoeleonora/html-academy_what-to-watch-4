import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";


it(`Show More button should render correctly`, () => {
  const tree = renderer
     .create(<ShowMoreButton
       onShowMoreButtonClick={() => {}}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
