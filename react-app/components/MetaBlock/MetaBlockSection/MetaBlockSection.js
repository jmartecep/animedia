import React, { Component } from "react";

class MetaBlockSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    return (
      <div>
        <h5>{props.title}</h5>
        <ul className="collection">{this.props.children}</ul>
      </div>
    );
  }
}

export default MetaBlockSection;
