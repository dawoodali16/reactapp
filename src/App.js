import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import List from './List';

class App extends Component {
  render() {
    state = {
      list = [],
      field = ''
    } 
    return (
      
      <div>
        const {list, field} = this.state;
        <Header name={'name'} />
        <input
          type="text"
          value={this.state.field}
          onChange={this.changeField}
          placeholder="Enter Text"
        />
        <button onClick={this.onClick}>Submit </button>
        <ul></ul>
        <List />
      </div>
    );
  }
}

export default App;
