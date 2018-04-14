import React, { Component } from "react";

class ScrollSpyBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="col-6">
        <ul>
          <li>
            <a href="#dinosaurgoliath">Dinosaur Goliath</a>
          </li>
          <ul>
            <li>
              <a href="#dinosaurgoliath-subheading">Subheading</a>
            </li>
          </ul>
          <li>Robot Geisha</li>
          <li>Bady Larry</li>
        </ul>
      </section>
    );
  }
}

export default ScrollSpyBlock;
