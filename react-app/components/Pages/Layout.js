import React, { Component } from "react";
import Navbar from "../Shared/Navbar";

class Layout extends Component {
  render() {
    return (
      <section>
        <Navbar />
        {this.props.children}
      </section>
    );
  }
}

export default Layout;
