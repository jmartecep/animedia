import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'; 



class Footer extends Component {
  render () {
    return (
      <div>
        <div className="row">
        <div className="col s4"></div>
        <div className="col s2"> 
            <h5>Get to Know Us</h5>
            <div className="row">
                <div className="col s12">
                    <a href="">About Animedia</a>
                </div>
                <div className="col s12">
                    <a href="">Corporate</a>
                </div>
                <div className="col s12">
                    <a href="">Contributors</a>
                </div>
            </div>
        </div>
        <div className="col s2"> 
            <h5>Advertise with Us</h5>
            <div className="row">
                <div className="col s12">
                    <a href="">About Our Ads</a>
                </div>
                <div className="col s12">
                    <a href="">Affiliate Program</a>
                </div>
                <div className="col s12">
                    <a href="">Terms of Use</a>
                </div>
            </div>
        </div>
        <div className="col s4"></div>
        </div>
        <div class="footer-copyright">
            <div class="container">
            © 2018 Animedia!
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
      </div>
    );
  }
}

export default Footer;