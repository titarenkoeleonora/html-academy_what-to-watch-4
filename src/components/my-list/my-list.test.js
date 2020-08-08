import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";

it(`Correctly ErrorScreen render`, () => {
  const tree = renderer
    .create(
        <MyList
          authorizationStatus={`AUTH`}
          onMovieCardClick={() => {}}
          onLoadFavoriteMovies={() => {}}
        />
    );

  expect(tree).toMatchSnapshot();
});
