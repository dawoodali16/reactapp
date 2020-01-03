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
    return (
      <div>
        <img
          style={{
            width: '100px',
            height: '100px'
          }}
          src={this.state.user.avatar_url}
          alt='loading'
        ></img>
        <h1 style={{ color: 'white' }}>Login: {this.state.user.login}</h1>
        <h3 style={{ color: 'white' }}>User ID: {this.state.user.id}</h3>
        <h3 style={{ color: 'white' }}>Node ID: {this.state.user.node_id}</h3>
        <h3 style={{ color: 'white' }}>User Login: {this.state.user.login}</h3>
        <h3 style={{ color: 'white' }}>
          Avatar URL: {this.state.user.avatar_url}
        </h3>
        <h3>User Email: {this.state.user.email}</h3>
        <h3 style={{ color: 'white' }}>
          User events_url: {this.state.user.events_url}
        </h3>
        <h3 style={{ color: 'white' }}>User Bio: {this.state.user.bio}</h3>
      </div>
    );
  }
}

export default withRouter(UserDetails);
