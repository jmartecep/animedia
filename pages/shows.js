import fetch from "isomorphic-unfetch";

const Shows = props => (
  <section>
    <p>Shows Page</p>
    {props.shows.map(show => <p>{show.title}</p>)}
  </section>
);

Shows.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/api/shows");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Shows;
