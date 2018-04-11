import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'; 
import './navbar.css';




class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="sugabums">
          <div className = "nav-wrapper">
            <a href="/" className="brand-logo center">Animedia</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href ="">About</a></li>
              <li><a href ="">About</a></li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href ="">About</a></li>
              <li><a href ="">About</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;