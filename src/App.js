import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    const { list = [], field = '' } = this.state;
    return (
      <div>
        <Header name={'name'} />
        <input
          type="text"
          value={this.state.field}
          onChange={this.changeField}
          placeholder="Enter Text"
        />
      </div>
    );
  }
}

export default App;
