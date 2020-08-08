import React from "react";
import renderer from "react-test-renderer";
import {MovieCardButtons} from "./movie-card-buttons";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus} from "../../reducer/user/user";

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

it(`Correctly render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieCardButtons
            activeMovie={testMovie}
            onPlayButtonClick={()=>{}}
            onChangeMovieIsFavorite={()=>{}}
            authorizationStatus={AuthorizationStatus.AUTH}
            onAddReviewClick={()=>{}}
          />
        </Router>
    );

  expect(tree).toMatchSnapshot();
});
