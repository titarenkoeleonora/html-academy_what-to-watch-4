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

describe(`test SmallMovieCard e2e`, () => {
  it(`Should movie card hovered`, () => {
    const onMovieCardHover = jest.fn((evt) => {
      const hoveredMovie = evt.target;
      return hoveredMovie;
    });

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          onMovieTitleClick={() => {}}
          onMovieCardHover={onMovieCardHover}
          onMouseOut={() => {}}
        />
    );

    const movieCards = smallMovieCard.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`mouseover`, testMovie);
    });

    expect(onMovieCardHover).toHaveBeenCalledTimes(1);
    expect(onMovieCardHover.mock.calls[0][0]).toMatchObject(testMovie);
  });

  it(`Should remove mouse from card`, () => {
    let hoveredMovie = null;

    const onMovieCardHover = (evt) => {
      hoveredMovie = evt.target;
      return hoveredMovie;
    };

    const onMouseOut = jest.fn(() => {
      hoveredMovie = null;
      return hoveredMovie;
    });

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          onMovieTitleClick={() => {}}
          onMovieCardHover={onMovieCardHover}
          onMouseOut={onMouseOut}
        />
    );

    const movieCards = smallMovieCard.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`mouseover`, testMovie);
      movieCard.simulate(`mouseout`, testMovie);
    });

    expect(onMouseOut).toHaveBeenCalledTimes(1);
    expect(hoveredMovie).toBeNull();
  });
});
