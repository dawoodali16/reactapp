import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    value1: 0,
    value2: 0,
    value3: 0
  };
  changeHandler = e => {
    if (e.target.name === "value1") this.setState({ value1: e.target.value });
    else this.setState({ value2: e.target.value });
  };

  clear = () => {
    this.setState({ value1: 0, value2: 0 });
  };
  btnAdd = () => {
    const add = this.value1 + this.value2;
    this.setState({ value3: add });
    this.clear();
  };
  btnSub = () => {
    const sub = this.value1 - this.value2;
    this.setState({ value3: sub });
    this.clear();
  };
  btnMul = () => {
    const mul = this.value1 * this.value2;
    this.setState({ value3: mul });
    this.clear();
  };
  btnDiv = () => {
    const div = this.value1 / this.value2;
    this.setState({ value3: div });
    this.clear();
  };
  render() {
    const { value1, value2, value3 } = this.state;
    return (
      <div>
        <div className="content">
          <h2>Hello {value3 && `${value1} ${value2}`}</h2>
          <label htmlFor="value1"> value1</label>
          <input
            type="number"
            id="value1"
            value={value1}
            placeholder="value"
            name="value1"
            onChange={this.changeHandler}
          />
          <br></br>
          <br></br>
          <label htmlFor="value2"> value2</label>
          <input
            type="number"
            id="value2"
            value={value2}
            placeholder="value"
            name="value2"
            onChange={this.changeHandler}
          />
          <br></br>
          <button onClick={this.btnAdd}> + </button>
          <button onClick={this.btnSub}> - </button>
          <button onClick={this.btnMul}> * </button>
          <button onClick={this.btnDiv}> % </button>
        </div>

        <div className="footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

export default App;
