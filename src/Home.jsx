import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import List from './List';
import { Footer as F } from './Footer';

class Home extends Component {
  state = {
    list: [],
    field: ''
  };
  onChange = e => {
    this.setState({ field: e.target.value });
  };
  submit = e => {
    e.preventDefault();
    const val = { title: this.state.field, isCompleted: false };
    this.setState(
      {
        list: [...this.state.list, val],
        field: ''
      },
      () => {
        if (this.state.list.length === 2)
          this.props.history.push({ pathname: '/head' });
        console.log('History', this.props.history.push());
      }
    );
  };
  delHandler = ind => {
    const list = [...this.state.list];
    list.splice(ind, 1);
    this.setState({ list });
  };
  doneHandler = ind => {
    const list = this.state.list;
    const result = list.map((v, index) => {
      if (ind === index) {
        v.isCompleted = !v.isCompleted;
        console.log('val ', v);
      }
      return v;
    });
    this.setState({ list: result });
  };
  render() {
    console.log('PROPS', this.props);
    const { list, field } = this.state;
    return (
      <div>
        <Header />
        <form onSubmit={this.submit}>
          <input type="text" onChange={this.onChange} value={field} />
          <button disabled={field ? false : true}>Add Here!!</button>
        </form>
        <List
          list={list}
          doneHandler={this.doneHandler}
          delHandler={this.delHandler}
        />
        <F name={moment().format('MMMM Do YYYY, HH:mm:s')} />
      </div>
    );
  }
}

export default withRouter(Home);
