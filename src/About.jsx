import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class About extends Component {
  doneHandler = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>ABOUT</h1>
        <h4>Australia</h4>
        <ul className="office-details">
          <li>
            <span>+(88) 457 87 74 87</span>
          </li>
          <li>
            <span>support@solo.com</span>
          </li>
          <li>
            <span>
              507 Din Street Building 55 <br />
              Sydney, Australia.
            </span>
          </li>
        </ul>
        <h4>United States</h4>
        <ul class="office-details">
          <li>
            <span>+(55) 879 58 87 46</span>
          </li>
          <li>
            <span>support@solo.com</span>
          </li>
          <li>
            <span>
              524 Mina Street Building 05
              <br />
              Newyork, USA.
            </span>
          </li>
        </ul>
        <button onClick={this.doneHandler}>Done</button>
      </div>
    );
  }
}
export default withRouter(About);
