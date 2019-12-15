import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import { Footer } from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <ul style={{ background: '#fff', padding: 20 }}>
          <span>
            <Link to="/">HOME | </Link>
          </span>
          <span>
            <Link to="/head">HEAD | </Link>
          </span>
          <span>
            <Link to="/foot">FOOTER</Link>
          </span>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/head">
            <Header />
          </Route>
          <Route path="/foot">
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
