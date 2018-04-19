import React, { Component } from "react";

class ScrollSpyBlock extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }

  render() {
    return (
      <section className="container-side">
        <h2>{this.props.title} Episode Guide</h2>
        <ul>
          <li>
            <a href="#title">{this.props.title}</a>
          </li>
          <ul className="collection">
            <li className="collection-header">
              <a href="#episode-guide" style={{ fontSize: "1.5rem" }}>Episodes</a>
            </li>
            {this.props.episodes.map((e, v) => (
              <li className="collection-item" key={v + "-scroll"}><a key={v + "-link"} href={"#" + v + "-episode"}>{e.title}</a></li>
            ))}
          </ul>
        </ul>

      </section>
    );
  }
}

export default ScrollSpyBlock;
