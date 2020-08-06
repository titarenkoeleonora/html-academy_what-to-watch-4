import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PropTypes from 'prop-types';
import withReview from "./with-review";

const testMovie = {
  id: 1,
  title: ``,
};

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WithReview`, () => {
  it(`Text value input work correctly`, () => {
    const MockComponent = ({onReviewChange}) => {
      return (
        <textarea onChange={onReviewChange} value=""></textarea>
      );
    };

    MockComponent.propTypes = {
      onReviewChange: PropTypes.func.isRequired
    };

    const MockComponentWrapped = withReview(MockComponent);

    const onReviewChange = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped activeMovie={testMovie} onSubmitClick={() => {}} onReviewChange={onReviewChange}/>
    );

    const input = wrapper.find(`textarea`);

    input.simulate(`change`, {
      target: {
        value: `aaaaaaaaaa`,
      },
    });

    expect(wrapper.state().comment).toEqual(`aaaaaaaaaa`);
  });

  it(`Rating starts select work correctly`, () => {
    const MockComponent = ({onRatingChange}) => {
      return (
        <input value="5" onChange={onRatingChange}/>
      );
    };

    MockComponent.propTypes = {
      onRatingChange: PropTypes.func.isRequired
    };

    const MockComponentWrapped = withReview(MockComponent);

    const onRatingChange = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped activeMovie={testMovie} onSubmitClick={() => {}} onRatingChange={onRatingChange}/>
    );

    const input = wrapper.find(`input`);

    expect(wrapper.state().rating).toEqual(5);

    input.simulate(`change`);

    expect(wrapper.state().rating).toEqual(`5`);
  });
});
