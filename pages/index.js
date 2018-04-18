import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="col s4 img-holder">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJND5svw8tcRlb4vpzlORhAqCJhPsKmyVXoV0_fvtwtfBLzim7" />
          </div>
          <div className="col s4 img-holder">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJND5svw8tcRlb4vpzlORhAqCJhPsKmyVXoV0_fvtwtfBLzim7" />
          </div>
          <div className="col s4 img-holder">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJND5svw8tcRlb4vpzlORhAqCJhPsKmyVXoV0_fvtwtfBLzim7" />
          </div>
        </div>
      </div>{" "}
      {/*End Row*/}
      <div className="row">
        <div className="col s12">
          <h1 className="textAlign">Insert Scrollspy Here!</h1>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        img {
          margin-top: 25px;
          border-radius: 50%;
        }

        .textAlign {
          text-align: center;
        }
      `}
    </style>
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data
//   };
// };

export default Index;
