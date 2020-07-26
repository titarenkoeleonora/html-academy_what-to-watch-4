import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MAX_SHOWN_MOVIES} from "../../constants.js";

const mockStore = configureStore([]);

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bgImage`,
  src: ``,
};

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `1`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `2`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `3`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `4`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `5`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `6`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  },
  {
    id: `7`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`
  }
];

const testReviews = [
  {
    id: `1`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: `8.9`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  },
  {
    id: `2`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: `8.0`,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
];

it(`Render App`, () => {
  const store = mockStore({
    activeGenre: `All genres`,
    movies: testMovies,
    shownMoviesCount: MAX_SHOWN_MOVIES,
    activeMovie: testMovie,
    isMovieVideoplayerActive: false,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            movie={testMovie}
            activeMovie={testMovie}
            movies={testMovies}
            reviews={testReviews}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
