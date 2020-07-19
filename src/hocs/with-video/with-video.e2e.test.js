import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = ({onSmallCardMouseOver, onSmallCardMouseOut}) => {
  return (
    <article
      onMouseOver={onSmallCardMouseOver}
      onMouseOut={onSmallCardMouseOut}
    />
  );
};

MockComponent.propTypes = {
  onSmallCardMouseOver: PropTypes.func.isRequired,
  onSmallCardMouseOut: PropTypes.func.isRequired,
};

it(`Should return correct state isPlayng`, () => {
  const MockComponentWrapped = withVideo(MockComponent);

  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const wrapper = mount(
      <MockComponentWrapped
        onSmallCardMouseOver={onMouseOver}
        onSmallCardMouseOut={onMouseOut}
      />
  );

  expect(wrapper.state().isPlaying).toBe(false);
  wrapper.simulate(`mouseover`);
  expect(wrapper.state().isPlaying).toBe(true);
  wrapper.simulate(`mouseout`);
  expect(wrapper.state().isPlaying).toBe(false);
});
