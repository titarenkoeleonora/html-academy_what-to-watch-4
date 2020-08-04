import React from "react";
import renderer from "react-test-renderer";
import {MovieCardButtons} from "./movie-card-buttons";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus} from "../../reducer/user/user";

const testMovie = {
  title: `Movie title`,
  genre: `Genre`,
  date: 2020,
  poster: `image`,
  bgImage: `bgImage`,
  src: ``,
  rating: 8.2,
  votes: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  runTime: 99,
};

it(`Correctly render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieCardButtons
            activeMovie={testMovie}
            onPlayButtonClick={()=>{}}
            changeMovieIsFavorite={()=>{}}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </Router>
    );

  expect(tree).toMatchSnapshot();
});
