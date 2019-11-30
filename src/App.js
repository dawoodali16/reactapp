import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import TextField from './Label';

class App extends Component {
  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    name: '',
    password: ''
  };

  inputChangeHandler = e => {
    const key = e.target.name;
    let value = e.target.value;
    const type = e.target.type;
    if (type === 'number') value = parseInt(value);
    this.setState({ [key]: value });
  };

  clear = () => {
    this.setState({ value1: 0, value2: 0 });
  };
  calculator = sign => {
    const { value1, value2 } = this.state;
    let result = 0;
    if (sign === '+') result = value1 + value2;
    else if (sign === '-') result = value1 - value2;
    else if (sign === '/') result = value1 / value2;
    else if (sign === '*') result = value1 * value2;
    this.setState({ value3: result });
    this.clear();
  };

  render() {
    const { value1, value2, value3, name, password } = this.state;
    return (
      <div>
        <Header name={name} />
        <div className="content">
          <h2>Hello {value3 && value3}</h2>
          <TextField
            label="Hello"
            name="name"
            id="name"
            value={name}
            type="text"
            placeholder="Name"
            changeHandler={this.inputChangeHandler}
          />
          <br />
          <TextField
            label="password"
            name="password"
            value={password}
            type="password"
            changeHandler={this.inputChangeHandler}
            id="password"
          />
          <br />
          <TextField
            label="value 1"
            name="value1"
            id="val1"
            changeHandler={this.inputChangeHandler}
            type="number"
            value={value1}
          />
          <br />
          <br />
          <TextField
            label="value 2"
            name="value2"
            id="val2"
            value={value2}
            type="number"
            changeHandler={this.inputChangeHandler}
          />
          <br />
          <Button handler={this.calculator} sign="+" />
          <Button handler={this.calculator} sign="-" />
          <Button handler={this.calculator} sign="*" />
          <Button handler={this.calculator} sign="/" />
        </div>

        {value3 > 5 && <Footer result={value3} />}
      </div>
    );
  }
}

export default App;
