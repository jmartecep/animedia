import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout.js";
import MetaBlock from "../components/MetaBlock";
import ScrollSpyBlock from "../components/ScrollSpyBlock";
import info from "../components/MetaBlock/data.json";
import Link from 'next/link'

const Shows = props => (
  <Link as={`/api/shows/${props.id}`} href={`/shows?id=${props.id}`}>
    <Layout>
      <div className="container row">
        <p>Show page</p>
        <div className="col m2">
          <ScrollSpyBlock />
        </div>
        <div className="col m6">

        </div>
        <div className="col m4">
          <MetaBlock title={props.title} show={props.show} />
        </div>
      </div>
    </Layout>
  </Link>
);

Shows.getInitialProps = async function (props) {
  const res = await fetch("http://localhost:3000/api/shows/" + props.query.id);
  const fetched = await res.json();

  let data = fetched[0];

  let show = {
    title: data.title,
    averageRating: data.averageRating,
    startDate: data.startDate,
    endData: data.endDate,
    ageRating: data.ageRatingGuide,
    airedOn: data.subtype,
    ratingRank: data.ratingRank,
    airedOn: data.airedOn
  };

  let youtubeTrailerId = data.youtubeTrailerId

  return {
    shows: fetched,
    show: show,
    id: props.query.id,
    title: show.title + " Info",
    youtubeTrailerId
  };
};

export default Shows;
