import React, {PureComponent, createRef} from "react";
import PageFooter from "../page-footer/page-footer";
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";
import {validateEmail, validatePassword} from "../../utils";

export default class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    const userData = {
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    };

    onSubmit(userData);
  }

  render() {
    return (
      <div className="user-page">
        <PageHeader>
          <h1 className="page-title user-page__title">Sign in</h1>
        </PageHeader>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                  id="user-email" ref={this.loginRef} onChange={validateEmail} required/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                  id="user-password" ref={this.passwordRef} onChange={validatePassword} required/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <PageFooter/>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
