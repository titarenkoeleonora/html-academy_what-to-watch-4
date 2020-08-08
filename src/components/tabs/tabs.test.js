import React from "react";
import renderer from "react-test-renderer";
import {MovieTabs} from "../../constants";
import Tabs from "./tabs";

const testMovie = {
  id: 0,
  title: `Movie title`,
  poster: ``,
  previewImage: ``,
  bgImage: ``,
  backgroundColor: ``,
  src: ``,
  previewVideoLink: ``,
  description: ``,
  rating: 8.2,
  votes: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  runTime: 99,
  genre: `Genre`,
  date: 2020,
  isFavorite: true,
};

const testReviews = [
  {
    id: 1,
    user: {},
    date: `December 24, 2016`,
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  },
  {
    id: 2,
    user: {},
    date: `November 18, 2015`,
    rating: 8.0,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
];

it(`Tabs correctly render`, () => {
  const tree = renderer
    .create(
        <Tabs
          activeMovie={testMovie}
          activeTab={MovieTabs.OVERVIEW}
          reviews={testReviews}
          onTabClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

