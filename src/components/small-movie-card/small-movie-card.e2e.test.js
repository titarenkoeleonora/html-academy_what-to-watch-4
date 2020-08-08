import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`test SmallMovieCard e2e`, () => {
  it(`Should movie card hovered`, () => {
    const onSmallCardMouseOver = jest.fn();
    const onSmallCardMouseOut = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          isPlaying={false}
          onMovieCardClick={() => {}}
          onSmallCardMouseOver={onSmallCardMouseOver}
          onSmallCardMouseOut={onSmallCardMouseOut}
        />
    );

    smallMovieCard.simulate(`mouseover`);

    expect(onSmallCardMouseOver).toHaveBeenCalledTimes(1);

    smallMovieCard.simulate(`mouseout`);

    expect(onSmallCardMouseOut).toHaveBeenCalledTimes(1);
  });

  it(`Should click on movie card`, () => {
    const onMovieCardClick = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={testMovie}
          isPlaying={false}
          onMovieCardClick={onMovieCardClick}
          onSmallCardMouseOver={() => {}}
          onSmallCardMouseOut={() => {}}
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
