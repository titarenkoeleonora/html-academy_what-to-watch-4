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

it(`Should movie card covered`, () => {
  const onMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        movie={testMovie}
        onMovieTitleClick={() => {}}
        onMovieCardHover={onMovieCardHover}
      />
  );

  const movieCard = smallMovieCard.find(`.small-movie-card`);

  movieCard.simulate(`mouseover`);

  expect(onMovieCardHover).toHaveBeenCalledTimes(1);
});
