import React from "react";
import PropTypes from "prop-types";

import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user";
import {UserActionCreator} from "../../reducer/actions/user-action-creator";

const PageHeader = ({authorizationStatus, authorizationInfo, onSignInClick}) => {
  return (
    <header className={`page-header ${authorizationStatus === AuthorizationStatus.NO_AUTH ? `user-page__head` : `movie-card__head`}}`}>
  `   <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">

        {authorizationStatus === AuthorizationStatus.AUTH ?
          <div className="user-block__avatar">
            <img src={authorizationInfo.avatar} alt={`${authorizationInfo.name} avatar`} width="63" height="63" />
          </div>
          : <a
            href="sign-in.html"
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              onSignInClick();
            }}
          >Sign in</a>
        }

      </div>
    </header>
  );
};

PageHeader.propTypes = {
  authorizationInfo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(UserActionCreator.isAuthorizing());
  }
});

export {PageHeader};
export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
