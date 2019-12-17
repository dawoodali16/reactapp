import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';
import { About } from './About';
import { Contact } from './Contact';
class App extends Component {
  render() {
    return (
      <Router>
        <Main />
        <About />
        <Contact />
      </Router>
    );
  }
}

export default App;
