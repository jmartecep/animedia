import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/shows" component={Show} />
        </div>
      </Router>
    );
  }
}

export default App;
