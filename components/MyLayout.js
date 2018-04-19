import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";
// head provider from nextjs
const Layout = props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Monoton"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <Header />
    {props.children}
    <style jsx global>{`
      h1 {
        font-size: 1.875rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      h4 {
        font-size: 1.25rem;
      }
      h5 {
        font-size: 1.125rem;
      }
      h6 {
        font-size: 1rem;
      }
    `}
    </style>
  </div>
);

export default Layout;
