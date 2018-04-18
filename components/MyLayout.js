import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";

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
  </div>
);

export default Layout;
