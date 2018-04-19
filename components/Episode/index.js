import React, { Component } from "react";

class Episoide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let [episodes] = this.props.episodes;
    console.log(episodes)

    return (
      <div>
        {Object.keys(episodes).map((episodeProperty, value) => (
          <article className="collection-item" key={value}>
            {episodeProperty}:{episodes[episodeProperty]}
          </article>
        ))}
      </div>
    );
  }
}
export default Episoide;
