import React, { Component } from 'react';
class Button extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.handler(this.props.sign);
        }}
      >
        {' '}
        {this.props.sign}{' '}
      </button>
    );
  }
}

export default Button;
