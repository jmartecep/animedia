import React, { Component } from "react";
import info from "./data.json";
import MetaBlockSection from "./MetaBlockSection";

class MetaBlock extends Component {
  constructor(props) {
    super(props);
  }

  splitUppercase(letters) {
    return letters.split(/(?=[A-Z])/);
  }

  formatObjectKey(key) {
    let str = this.splitUppercase(key);
    let meta = "";
    str.forEach(chunk => {
      meta += chunk.charAt(0).toUpperCase() + chunk.substr(1) + " ";
    });

    return meta;
  }

  render() {
    let data = info[0].attributes;

    let show = {
      title: data.titles.en,
      averageRating: data.averageRating,
      startDate: data.startDate,
      endData: data.endDate,
      ageRating: data.ageRatingGuide,
      airedOn: data.subtype
    };
    return (
      <div>
        <MetaBlockSection>
          {Object.keys(show).map((showProperty, value) => (
            <li className="collection-item" key={value}>
              {this.formatObjectKey(showProperty)}: {show[showProperty]}
            </li>
          ))}
        </MetaBlockSection>
      </div>
    );
  }
}
export default MetaBlock;
