import React, { Component } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*<div className = "nav-wrapper">
            <a href="/" className="brand-logo center">Animedia</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html"><i className="material-icons"></i></a></li>
              <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
              <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
              <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
            </ul>
          </div>*/}

          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              <i className="material-icons" />Animedia
            </a>

            <ul className="right hide-on-med-and-down">
              <li>
                <form>
                  <div className="input-field">
                    <input id="search" type="search" required />
                    <label className="label-icon" htmlFor="search">
                      <i className="material-icons">search</i>
                    </label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          {/*End Nav Wrapper*/}
        </nav>
      </div>
    );
  }
}

export default Navbar;
