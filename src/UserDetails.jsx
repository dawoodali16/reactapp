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
    console.log(this.props.match.params);
  }
  render() {
    return (
      <div>
        <img
          style={{ width: 'auto', height: 'auto' }}
          src={this.state.user.avatar_url}
          alt='loading'
        ></img>
        <h1 style={{ color: 'white' }}>{this.state.user.node_id}</h1>
        <h1 style={{ color: 'white' }}>{this.state.user.login}</h1>
        <h1 style={{ color: 'white' }}>{this.state.user.avatar_url}</h1>
      </div>
    );
  }
}

export default withRouter(UserDetails);
