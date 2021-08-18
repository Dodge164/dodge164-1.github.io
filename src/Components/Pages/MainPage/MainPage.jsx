import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">Need For Drive</div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/">
            Features
          </Link>
          <Link className="nav-link" to="/">
            Pricing
          </Link>
          <Link
            className="nav-link disabled"
            to="/"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </Link>
        </div>
      </div>
    </nav>

    // <div className="container">
    //   <h1 className="display-4">Need for Drive</h1>
    //   <p className="lead">On June 27, 2018 was released the API version 2</p>

    //   <p className="lead">
    //     On the current account, only three leagues are available for more
    //     detailed viewing:
    //     <ul>
    //       <li>UEFA Champions League</li>
    //       <li>European Championship</li>
    //       <li>FIFA World Cup</li>
    //     </ul>
    //   </p>
    // </div>
  );
}
