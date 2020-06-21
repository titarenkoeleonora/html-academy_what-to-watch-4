import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

const testMovie = {
  id: `0`,
  title: `movie title`,
  image: `image`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card hovered`, () => {
  const onMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        movie={testMovie}
        onMovieTitleClick={() => {}}
        onMovieCardHover={onMovieCardHover}
      />
  );

  const movieCards = smallMovieCard.find(`.small-movie-card`);

  movieCards.forEach((movieCard) => {
    movieCard.simulate(`mouseover`, testMovie);
  });

  expect(onMovieCardHover).toHaveBeenCalledTimes(1);
  expect(onMovieCardHover.mock.calls[0][0]).toMatchObject(testMovie);
});
