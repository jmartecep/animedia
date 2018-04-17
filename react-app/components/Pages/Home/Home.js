import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="col s4 img-holder">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJND5svw8tcRlb4vpzlORhAqCJhPsKmyVXoV0_fvtwtfBLzim7" />
              </div>
              <div className="col s4 img-holder">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJND5svw8tcRlb4vpzlORhAqCJhPsKmyVXoV0_fvtwtfBLzim7" />
              </div>
              <div className="col s4 img-holder">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJND5svw8tcRlb4vpzlORhAqCJhPsKmyVXoV0_fvtwtfBLzim7" />
              </div>
            </div>
          </div>{" "}
          {/*End Row*/}
          <div className="row">
            <div className="col s12">
              <h1 className="textAlign">Insert Scrollspy Here!</h1>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
