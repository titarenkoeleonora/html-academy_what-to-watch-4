import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

const testMovie = {
  id: `0`,
  title: `movie title`,
  poster: `image`,
  src: ``,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`test SmallMovieCard e2e`, () => {
  it(`Should movie card hovered`, () => {
    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          isPlaying={false}
          onMovieCardClick={() => {}}
          onMouseOver={() => {}}
          onMouseOut={() => {}}
        />
    );

    expect(smallMovieCard.state().isPlaying).toBe(false);

    smallMovieCard.simulate(`mouseover`);

    expect(smallMovieCard.state().isPlaying).toBe(true);

    smallMovieCard.simulate(`mouseout`);

    expect(smallMovieCard.state().isPlaying).toBe(false);
  });

  it(`Should click on movie card`, () => {
    const onMovieCardClick = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          isPlaying={false}
          onMovieCardClick={onMovieCardClick}
          onMouseOver={() => {}}
          onMouseOut={() => {}}
        />
    );

    const openMoviePage = jest.fn();

    smallMovieCard.forEach((movieCard) => {
      movieCard.simulate(`click`, {
        preventDefault: openMoviePage
      });
    });

    expect(onMovieCardClick).toHaveBeenCalledTimes(1);
  });
});
