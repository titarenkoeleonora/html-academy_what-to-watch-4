import React from "react";
import PropTypes from "prop-types";

import {PageHeader} from "../page-header/page-header";
import {Link} from "react-router-dom";
import {AppRoute, RATING} from "../../constants";
import {getIsError} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {getIsFormDisabled} from "../../reducer/app-state/selectors";

const AddReview = (props) => {
  const {activeMovie,
    onReviewFormSubmit,
    isFormDisabled,
    isSubmitButtonDisabled,
    isError,
  } = props;

  return (
    <section className="movie-card movie-card--full" style={{background: activeMovie.backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeMovie.background} alt={activeMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILM}/${activeMovie.id}`} className="breadcrumbs__link">{activeMovie.title}</Link>              </li>
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
        <form action="#" className="add-review__form" onSubmit={onReviewFormSubmit} disabled={isFormDisabled}>
          <div className="rating">
            <div className="rating__stars">
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
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isSubmitButtonDisabled}
                style={{cursor: `${isSubmitButtonDisabled ? `default` : `pointer`}`}}
              >Post</button>
            </div>

          </div>
        </form>

        {isError &&
           <p style={{color: `tomato`, textAlign: `center`}}>Your review has not been sent. Please try again later.</p>}
      </div>

    </section>
  );
};

AddReview.propTypes = {
  activeMovie: PropTypes.object.isRequired,
  onReviewFormSubmit: PropTypes.func.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isError: getIsError(state),
  isFormDisabled: getIsFormDisabled(state),
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
