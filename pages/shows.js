import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout.js";
import MetaBlock from "../components/MetaBlock";
import ScrollSpyBlock from "../components/ScrollSpyBlock";
import info from "../components/MetaBlock/data.json";
import YoutubeVideo from '../components/YoutubeVideo'
import Link from 'next/link'
import Episodes from '../components/Episode'

const Shows = props => (
  <Link as={`/api/shows/${props.id}`} href={`/shows?id=${props.id}`}>
    <Layout>
      <div className="container row">
        <p>Show page</p>
        <div className="col m2">
          <ScrollSpyBlock />
        </div>
        <div className="col m6">
          {props.description}
          <Episodes episodes={props.episodes} />
        </div>
        <div className="col m4">
          <MetaBlock title={props.title} show={props.show} />
          {/* <YoutubeVideo allowFullScreen width="100%" height="200" youtubeTrailerId={props.youtubeTrailerId} /> */}
        </div>
      </div>
    </Layout>
  </Link>
);

Shows.getInitialProps = async function (props) {
  const res = await fetch("http://localhost:3000/api/shows/" + props.query.id);
  const fetched = await res.json();

  const epi = await fetch(`http://localhost:3000/api/shows/${props.query.id}/episodes`);
  const epiFetched = await epi.json();

  let data = fetched[0];

  let show = {
    title: data.title,
    averageRating: data.averageRating,
    startDate: data.startDate,
    endData: data.endDate,
    ageRating: data.ageRating,
    airedOn: data.airedOn,
    ratingRank: data.ratingRank,
    airedOn: data.airedOn
  };

  let youtubeTrailerId = data.youtubeTrailerId
  let description = data.description

  return {
    shows: fetched,
    show: show,
    id: props.query.id,
    title: show.title + " Info",
    youtubeTrailerId,
    description,
    episodes: epiFetched
  };
};

export default Shows;
