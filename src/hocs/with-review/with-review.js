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
        isSubmitDisabled: (evt.target.value.length < Review.MIN_LENGTH) || (evt.target.value.length > Review.MAX_LENGTH) ? true : false,
      });
    }

    _handleSubmitClick(evt) {
      const {activeMovie, onReviewSubmit} = this.props;

      const review = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      evt.preventDefault();
      onReviewSubmit(activeMovie, review);
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
    activeMovie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      bgImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    }),
    onReviewSubmit: PropTypes.func.isRequired,
  };

  return WithReview;

};

export default withReview;
