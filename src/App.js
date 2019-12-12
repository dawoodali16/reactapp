import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Header from './Header';
import List from './List';

class App extends Component {
  state = {
    list: [],
    field: ''
  };

  changeField = e => {
    this.setState({ field: e.target.value });
  };
  submit = e => {
    e.preventDefault();
    const val = { title: this.state.field, isCompleted: false };
    this.setState({
      field: '',
      list: [...this.state.list, val]
    });
  };

  doneHandler = index => {
    const list = this.state.list;
    const mapResult = list.map((val, ind) => {
      if (ind === index) {
        val.isCompleted = !val.isCompleted;
      }
      return val;
    });
    this.setState({ list: mapResult });
  };

  removeHandler = index => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  };

  render() {
    const { list, field } = this.state;

    return (
      <div>
        <Header name={moment().format('MMMM Do YYYY, HH:mm:ss')} />
        <form onSubmit={this.submit}>
          <input
            type="text"
            value={field}
            onChange={this.changeField}
            placeholder="Enter a TODO"
          />
          <button disabled={field ? false : true}>Submit </button>
        </form>
        <ul></ul>
        <List
          list={list}
          doneHandler={this.doneHandler}
          removeHandler={this.removeHandler}
        />
      </div>
    );
  }
}

export default App;
