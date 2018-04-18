import React, { Component } from "react";

class MetaBlockSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    return (
      <aside>
        <h5>{props.title}</h5>
        <ul className="collection">{this.props.children}</ul>
      </aside>
    );
  }
}

export default MetaBlockSection;
