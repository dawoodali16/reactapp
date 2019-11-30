import React, { Component } from 'react';

class TextField extends Component {
  render() {
    const {
      label,
      type,
      id,
      value,
      placeholder,
      name,
      changeHandler
    } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder || 'placeholder'}
          name={name}
          onChange={changeHandler}
        />
      </div>
    );
  }
}
export default TextField;
