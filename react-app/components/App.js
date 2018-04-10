import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './Shared/Navbar';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Footer from './Shared/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;