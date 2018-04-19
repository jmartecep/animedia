import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="sugabums">

          <div class="nav-wrapper">
            <a href="#!" class="brand-logo center"><i class="material-icons"></i>Animedia</a>

            <ul class="right hide-on-med-and-down">
              <li>
                <form>
                  <div class="input-field">
                    <input id="search" type="search" required></input>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                  </div>
                </form>
              </li>
            </ul>
          </div>{/*End Nav Wrapper*/}


        </nav>
      </div>
    );
  }
}

export default Navbar;