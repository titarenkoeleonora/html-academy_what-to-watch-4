import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Review} from '../../constants';
import {getActiveMovieById} from '../../reducer/app-state/selectors';
import {connect} from 'react-redux';
import history from '../../history';

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
      history.goBack();
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

  const mapStateToProps = (state, props) => ({
    activeMovie: getActiveMovieById(state, props.id),
  });

  return connect(mapStateToProps)(WithReview);
};

export default withReview;
