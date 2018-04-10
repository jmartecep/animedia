import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'; 
import './styles.css';

class Home extends Component {
  render () {
    return (
      <div className="container">
          <div className="row">
              <div className="col s12 bg">
                <div class="jumbotron">
                  <h1>Bootstrap Tutorial</h1> 
                  <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
                  responsive, mobile-first projects on the web.</p> 
                </div> 
              </div>
          </div>
      </div>//end contianer
    );
  }
}

export default Home;