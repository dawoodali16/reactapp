import React, { Component } from "react";

class Footer extends Component {
  componentDidMount() {
    console.log("ComponentDidMount Fire");
  }
  componentDidUpdate(prevProps) {
    prevProps.result !== this.props.result && console.log("UDPATED RESULT!!!");
    console.log("ComponentDidUpdate Fire");
  }
  componentWillUnmount() {
    console.log("ComponenWillUnmount Fire");
  }

  render() {
    console.log("Render Fire");
    return (
      <div className="footer">
        <p>Footer {this.props.result}</p>
      </div>
    );
  }
}

export default Footer;
