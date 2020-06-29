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
    let isPlaying = false;

    const handleMouseOver = jest.fn(() => {
      isPlaying = false;
      return isPlaying;
    });

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          isPlaying={false}
          onMovieCardClick={() => {}}
          onMouseOver={handleMouseOver}
          onMouseOut={() => {}}
        />
    );

    const movieCards = smallMovieCard.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`mouseover`, testMovie);
    });

    expect(handleMouseOver).toHaveBeenCalledTimes(1);
    expect(smallMovieCard.state().isPlaying).toBe(true);
  });

  it(`Should remove mouse from card`, () => {
    let isPlaying = false;

    const handleMouseOver = () => {
      isPlaying = true;
      return isPlaying;
    };

    const handleMouseOut = jest.fn(() => {
      isPlaying = false;
      return isPlaying;
    });

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          isPlaying={false}
          onMovieCardClick={() => {}}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
    );

    const movieCards = smallMovieCard.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`mouseover`, testMovie);
      movieCard.simulate(`mouseout`, testMovie);
    });

    expect(handleMouseOut).toHaveBeenCalledTimes(1);
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

    const movieCards = smallMovieCard.find(`.small-movie-card`);
    const openMoviePage = jest.fn();

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`click`, {
        preventDefault: openMoviePage
      });
    });

    expect(onMovieCardClick).toHaveBeenCalledTimes(1);
  });
});
