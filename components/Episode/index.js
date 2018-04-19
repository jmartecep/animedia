import React, { Component } from "react";

class Episoide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let episodes = this.props.episodes;

    return (
      <div>
        {episodes.map(e => (
          <div>
            <h3>{e.title}</h3>
            <hr />
            <p>{e.synopsis}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Episoide;
