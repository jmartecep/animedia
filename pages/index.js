import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <div>
      <div className="row">
        <div className="col s12 ">
          <h1 className="textAlign">All Your Favorite Anime!</h1>
          {props.shows.map((show, v) => (
            <Link key={v + "-Link"} href={`/shows?id=${show.id}`}>
              <section key={v + "-" + show.ratingRank} className="card col m3">
                <header className="center-align card-heading" key={v + "--" + show.ratingRank}>
                  <h6 key={v + "---" + show.ratingRank}>{show.title}</h6>
                  <p key={v + "--p"} className="flow-text">Rating Rank: {show.ratingRank}</p>
                </header>
                <figure key={v + "----" + show.ratingRank}>
                  <img key={v + "-----" + show.ratingRank} src={show.poster} />
                </figure>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <style jsx>
      {`
        img {
          object-fit: cover;
          object-position: top center;
          max-height: 200px; 
          padding: 10px; 
          width: 100%;
        }

        .textAlign {
          text-align: center;
        }
        .card {
          cursor: pointer;
          min-height: 350px;
        }
      `}
    </style>
  </Layout>
);

Index.getInitialProps = async function (props) {
  const res = await fetch("http://localhost:3000/api/shows/");
  const fetched = await res.json();

  let shows = fetched.map(data => {
    return {
      id: data.id,
      title: data.title,
      averageRating: data.averageRating,
      startDate: data.startDate,
      endData: data.endDate,
      ageRating: data.ageRating,
      airedOn: data.airedOn,
      ratingRank: data.ratingRank,
      airedOn: data.airedOn,
      poster: data.poster
    }
  });

  return {
    shows
  };
};

export default Index;
