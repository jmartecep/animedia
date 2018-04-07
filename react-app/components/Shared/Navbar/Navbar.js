import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <Link to="/shows">Shows</Link>
    );
  }
}

export default Navbar;