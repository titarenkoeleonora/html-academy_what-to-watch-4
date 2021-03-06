import React from "react";
import PropTypes from "prop-types";

import {PageHeader} from "../page-header/page-header";
import {Link} from "react-router-dom";
import {AppRoute, RATING, SubmitStatus} from "../../constants";
import {connect} from "react-redux";
import {getIsFormDisabled, getActiveMovieById} from "../../reducer/app-state/selectors";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors";
import ErrorScreen from "../error-screen/error-screen";
import {getSubmitStatus} from "../../reducer/data/selectors";
import history from "../../history";

const AddReview = (props) => {
  const {
    activeMovie,
    onSubmitClick,
    isFormDisabled,
    isSubmitDisabled,
    submitStatus,
    authorizationStatus,
    authorizationInfo,
    onRatingChange,
    onReviewChange,
  } = props;

  const getError = () => {
    if (submitStatus === SubmitStatus.SUCCESS) {
      return history.goBack();
    }

    if (submitStatus === SubmitStatus.ERROR) {
      return <p style={{color: `tomato`, textAlign: `center`}}>Your review has not been sent. Please try again later.</p>;
    }

    return null;
  };

  if (!activeMovie) {
    return <ErrorScreen/>;
  }

  return (
    <section className="movie-card movie-card--full" style={{background: activeMovie.backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeMovie.bgImage} alt={activeMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader authorizationStatus={authorizationStatus} authorizationInfo={authorizationInfo}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.MOVIE}/${activeMovie.id}`} className="breadcrumbs__link">{activeMovie.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </PageHeader>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={activeMovie.poster} alt={`${activeMovie.title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={onSubmitClick} disabled={isFormDisabled}>
          <div className="rating">
            <div className="rating__stars" onChange={onRatingChange}>
              {new Array(RATING)
                .fill().map((item, index) => {
                  const rating = index + 1;
                  return (
                    <React.Fragment key={index + 1}>
                      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={`${rating}`}/>
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  );
                })
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              onChange={onReviewChange}
            ></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}
                style={{cursor: `${isSubmitDisabled ? `default` : `pointer`}`}}
              >Post</button>
            </div>

          </div>
          {getError()}
        </form>
      </div>

    </section>
  );
};
AddReview.propTypes = {
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
  onSubmitClick: PropTypes.func.isRequired,
  isSubmitDisabled: PropTypes.bool,
  isFormDisabled: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  submitStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  isFormDisabled: getIsFormDisabled(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  activeMovie: getActiveMovieById(state, props.id),
  submitStatus: getSubmitStatus(state),
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
