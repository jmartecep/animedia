import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'; 
import './navbar.css';




class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="sugabums">
          {/*<div className = "nav-wrapper">
            <a href="/" className="brand-logo center">Animedia</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html"><i className="material-icons"></i></a></li>
              <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
              <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
              <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
            </ul>
          </div>*/}

<div class="nav-wrapper">
      <a href="#!" class="brand-logo center"><i class="material-icons"></i>Animedia</a>
      <ul class="right hide-on-med-and-down">
        {/*<li><a href="sass.html"><i class="material-icons">search</i></a></li>*/}
        <li><input type="text" name="search" placeholder="Search.."></input></li>
        <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
      </ul>
    </div>


        </nav>
      </div>
    );
  }
}

export default Navbar;