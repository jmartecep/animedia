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
        {episodes.map((e, v) => (
          <article className="row section valign-wrapper" id={v + "-episode"} key={v + "-article"}>
            <div className="col m8">
              <h3 className="epi-title" key={v + "-h3"}>{e.title}</h3>
              <h4><small>{this.props.title} Episode: 1 &bull; Season Number: {e.seasonNumber} &bull; Length: {e.length}min</small></h4>
              <hr style={{ width: "50%", position: "relative", left: "-25%" }} key={v + "-hr"} />
              <p key={v + "-p"}>{e.synopsis}</p>
            </div>
            <div className="col m4">
              <img className="responsive-img" src={e.thumbnail} alt={e.title} />
            </div>
          </article>
        ))}
      </div>
    );
  }
}
export default Episoide;
