import React, { Component } from "react";
import data from "./data.json";

class MetaBlock extends Component {
  render() {
    return (
      <div>
        <ul>
          {data.map(show => (
            <div key={show.id}>
              <li>{show.attributes.titles.en}</li>
              <li>{show.attributes.averageRating}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default MetaBlock;
