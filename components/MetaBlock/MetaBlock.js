import React, { Component } from "react";
import MetaBlockSection from "./MetaBlockSection";

class MetaBlock extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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

    return meta.trimRight();
  }

  render() {
    let show = this.props.show;

    return (
      <div>
        <MetaBlockSection title={this.props.title}>
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
