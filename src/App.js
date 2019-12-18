import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Main';
import Home from './Home';
import { About } from './About';
import { Contact } from './Contact';
class App extends Component {
  render() {
    return (
      <Router>
        <ul style={{ background: '#333', padding: '20px', color: 'white' }}>
          <span>Main | </span>
          <span>Home | </span>
          <span>About | </span>
          <span>Contact</span>
        </ul>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
