import React, { Component } from "react";

class MetaBlockSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul className="collection">{this.props.children}</ul>;
  }
}

export default MetaBlockSection;
