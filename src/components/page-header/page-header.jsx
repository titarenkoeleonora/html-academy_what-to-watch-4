import React from "react";
import PropTypes from "prop-types";

import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants";

const PageHeader = ({authorizationStatus, authorizationInfo, children}) => {
  console.log(authorizationStatus);
  return (
    <header className={`page-header user-page__head`}>
      <div className="logo">
        <Link
          className="logo__link"
          to={AppRoute.ROOT}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH ?
          <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img src={authorizationInfo.avatar} alt={`${authorizationInfo.name} avatar`} width="63" height="63" />
            </div>
          </Link>
          :
          <Link
            to={AppRoute.LOGIN}
            className="user-block__link">
          Sign in
          </Link>
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
  children: PropTypes.node,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
});

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
