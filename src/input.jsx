import React, { Component } from 'react';
class input extends Component {
  render() {
    return (
      <input
        type="number"
        id="value2"
        value={value2}
        placeholder="value"
        name="value2"
        onChange={this.changeHandler}
      />
    );
  }
}
export default input;
