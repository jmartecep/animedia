import React, { Component } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

class Layout extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <Footer />
        {this.props.children}
      </section>
    );
  }
}

export default Layout;
