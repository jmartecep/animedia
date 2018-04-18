import React, { Component } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Edit from "../Pages/Edit";

class Layout extends Component {
  render() {
    return (
      <section>
        <Navbar />

        {this.props.children}

        <Footer />
      </section>
    );
  }
}

export default Layout;
