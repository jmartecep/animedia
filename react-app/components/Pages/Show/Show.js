import React, { Component } from "react";
import MetaBlock from "../../MetaBlock";
import ScrollSpyBlock from "../../ScrollSpyBlock";
import "./Show.css";

class Show extends Component {
  constructor(props) {
    super(props);
    // let data = info[0].attributes;

    // let show = {
    //   title: data.titles.en,
    //   averageRating: data.averageRating,
    //   startDate: data.startDate,
    //   endData: data.endDate,
    //   ageRating: data.ageRatingGuide,
    //   airedOn: data.subtype
    // };

    // let episode = {
    //   status: data.status,
    //   episodeCount: data.episodeCount,
    //   episodeLength: data.episodeLength,
    //   suitableForWork: data.nsfw ? "Yes" : "No"
    // };
  }

  componentWillMount() {}

  render() {
    return (
      <div className="container row">
        <p>Show page</p>
        <ScrollSpyBlock />
        <MetaBlock />
      </div>
    );
  }
}

export default Show;
