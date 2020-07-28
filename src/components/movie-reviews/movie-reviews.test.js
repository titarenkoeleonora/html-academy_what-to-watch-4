import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";

const testReviews = [
  {
    id: 1,
    user: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  },
  {
    id: 2,
    user: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
];

it(`Correctlt render`, () => {
  const tree = renderer
    .create(
        <MovieReviews
          reviews={testReviews}
        />
    );

  expect(tree).toMatchSnapshot();
});
