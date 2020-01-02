import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
class About extends Component {
  state = {
    data: [],
    loading: false
  };
  getData = () => {
    this.setState({ loading: true });
    const api = `http://api.github.com/users`;
    axios(api)
      .then(({ data }) => {
        this.setState({ data, loading: false });
      })
      .catch(error => console.log(`error`, error));
  };

  render() {
    return (
      <div>
        <button disabled={this.state.loading} onClick={this.getData}>
          GET GITHUB DATA
        </button>
        <div>
          {this.state.loading ? (
            <img
              src={'https://giphy.com/gifs/11xBk5MoWjrYoE/html5'}
              alt='loading'
            ></img>
          ) : (
            <table>
              {this.state.data.length ? (
                <tr>
                  <th>Name:</th>
                  <th>ID:</th>
                  <th>Node ID:</th>
                  <th>URL:</th>
                </tr>
              ) : null}
              {this.state.data.map(user => {
                return (
                  <tr>
                    <td>
                      <Link to={`/about/${user.login}`}>
                        {user.login[0].toUpperCase() + user.login.slice(1)}
                      </Link>
                    </td>
                    <td>{user.id}</td>
                    <td>{user.node_id}</td>
                    <td>{user.url}</td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(About);
