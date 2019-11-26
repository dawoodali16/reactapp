import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

class App extends Component {
  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    name: 'Dawood'
  };
  changeHandler = e => {
    if (e.target.value) {
      const val = parseInt(e.target.value);
      if (e.target.name === 'value1') this.setState({ value1: val });
      else this.setState({ value2: val });
    }
  };

  clear = () => {
    this.setState({ value1: 0, value2: 0 });
  };
  btnAdd = () => {
    const { value1, value2 } = this.state;
    const add = value1 + value2;
    this.setState({ value3: add });
    this.clear();
  };
  btnSub = () => {
    const sub = this.state.value1 - this.state.value2;
    this.setState({ value3: sub });
    this.clear();
  };
  btnMul = () => {
    const mul = this.state.value1 * this.state.value2;
    this.setState({ value3: mul });
    this.clear();
  };
  btnDiv = () => {
    const div = this.state.value1 / this.state.value2;
    this.setState({ value3: div });
    this.clear();
  };
  render() {
    const { value1, value2, value3, name } = this.state;
    return (
      <div>
        <Header name={name} />
        <div className="content">
          <h2>Hello {value3 && value3}</h2>
          <label htmlFor="value1"> value1</label>
          <input
            type="number"
            id="value1"
            value={value1}
            placeholder="value"
            name="value1"
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <label htmlFor="value2"> value2</label>
          <input
            type="number"
            id="value2"
            value={value2}
            placeholder="value"
            name="value2"
            onChange={this.changeHandler}
          />
          <br />
          <Button handler={this.btnAdd} sign="+" />
          <Button handler={this.btnSub} sign="-" />
          <Button handler={this.btnMul} sign="*" />
          <Button handler={this.btnDiv} sign="/" />
        </div>
        {value3 > 5 && <Footer result={value3} />}
      </div>
    );
  }
}

export default App;
