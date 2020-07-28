import React from "react";
import renderer from "react-test-renderer";
import {MovieCardButtons} from "./movie-card-buttons";

it(`Correctly render`, () => {
  const tree = renderer
    .create(
        <MovieCardButtons
          onPlayButtonClick={()=>{}}
        />
    );

  expect(tree).toMatchSnapshot();
});
