import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout.js";
import MetaBlock from "../components/MetaBlock";
import ScrollSpyBlock from "../components/ScrollSpyBlock";
import YoutubeVideo from '../components/YoutubeVideo'
import Link from 'next/link'
import Episodes from '../components/Episode'

const Shows = props => (
  <Link as={`/api/shows/${props.id}`} href={`/shows?id=${props.id}`}>
    <Layout>
      <img className="coverimage responsive-img" src={props.coverImage} />
      <div className="row">
        <h1 className="title">{props.show.title}</h1>
        <div className="col m2">
          <div id="side">
            <ScrollSpyBlock title={props.show.title} episodes={props.episodes} />
          </div>
        </div>
        <div className="col m6">
          <p className="flow-text">{props.description}</p>
          <hr />
          <Episodes id="episode-guide" title={props.show.title} episodes={props.episodes} />
        </div>
        <div className="col m4">
          <MetaBlock title={props.title} show={props.show} />
          <YoutubeVideo allowFullScreen width="100%" height="350" youtubeTrailerId={props.youtubeTrailerId} />
        </div>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          font-size: 4rem;
          margin: 0;
          padding: 0;
          position: relative;
          left: -6vw;
          background-image: linear-gradient(rgba(0,0,0,0.7) 50%, red 75% , black 100%);
          border-radius: 5% 5% 0 0;
          width: 106vw;
          top: -40px;
          background-blend-mode: hard-light;
          color: white;
          z-index: 50;
        }
        .flow-text {
          font-size: 1.15rem;
        }
        .coverimage {
          max-height: 40vh;
          width: 100vw;
          object-fit: cover;
          object-position: center;
          margin: auto;
          position: absolute;
          top: 0;
          z-index:0;
        }
    `}</style>
    </Layout>
  </Link>
);

Shows.getInitialProps = async function (props) {
  const res = await fetch("http://localhost:3000/api/shows/" + props.query.id);
  const fetched = await res.json();

  const epi = await fetch(`http://localhost:3000/api/shows/${props.query.id}/episodes`);
  let epiFetched = await epi.json();

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

  let episodes = epiFetched.map(element => {
    return element
  });

  let youtubeTrailerId = data.youtubeTrailerId
  let description = data.description
  let coverImage = data.coverImage

  return {
    shows: fetched,
    show: show,
    id: props.query.id,
    title: show.title + " Info",
    youtubeTrailerId,
    description,
    episodes,
    coverImage
  };
};

export default Shows;
