import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Review} from '../../constants';

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        comment: ``,
        isSubmitDisabled: true,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleSubmitClick = this._handleSubmitClick.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleReviewChange(evt) {
      this.setState({
        comment: evt.target.value,
        isSubmitDisabled: (evt.target.value.length < Review.MIN_LENGTH) || (evt.target.value.length > Review.MAX_LENGTH),
      });
    }

    _handleSubmitClick(evt) {
      const {activeMovie, onReviewSubmit} = this.props;

      const review = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      evt.preventDefault();
      onReviewSubmit(activeMovie.id, review);
    }

    render() {
      const {activeMovie} = this.props;

      return (
        <Component
          {...this.props}
          activeMovie={activeMovie}
          onSubmitClick={this._handleSubmitClick}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          isSubmitDisabled={this.state.isSubmitDisabled}
        />
      );
    }
  }

  WithReview.propTypes = {
    activeMovie: PropTypes.object.isRequired,
    onReviewSubmit: PropTypes.func.isRequired,
  };
};

export default withReview;
