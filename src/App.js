import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from './Main';
import Home from './Home';
import About from './About';
import { Contact } from './Contact';
import UserDetails from './UserDetails';
class App extends Component {
  render() {
    return (
      <Router>
        <ul style={{ background: '#333', padding: '20px', color: 'white' }}>
          <span>
            {' '}
            <Link to='/'>Main | </Link>
          </span>
          <span>
            <Link to='/Home'>Home | </Link>
          </span>
          <span>
            <Link to='/About'>About | </Link>{' '}
          </span>
          <span>
            <Link to='/Contact'>Contact | </Link>
          </span>
        </ul>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/Home'>
            <Home />
          </Route>
          <Route path='/About/:id'>
            <UserDetails word='Hello Worlds' />
          </Route>
          <Route path='/About'>
            <About />
          </Route>

          <Route path='/Contact'>
            <Contact />
            <Route exact path='/Contact'>
              Contact Main
            </Route>
            <Route path='/Contact/local'>Contact Local</Route>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
