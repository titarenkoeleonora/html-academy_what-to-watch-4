import React from "react";

const ErrorScreen = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
        </header>

        <div className="sign-in user-page__content">
          <div className="sign-in__message">
            <p>Loading...</p>
          </div>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© {currentYear} What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ErrorScreen;
