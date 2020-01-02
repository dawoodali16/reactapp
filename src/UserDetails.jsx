import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UserDetails extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const name = this.props.match.params.id;
    axios(`http://api.github.com/users/${name}`).then(res => {
      this.setState({ user: res.data });
    });
  }
  render() {
    return <h1>{this.state.user.login}</h1>;
  }
}

export default withRouter(UserDetails);
