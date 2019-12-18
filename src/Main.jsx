import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          amet sint ipsam at fuga eos cumque nesciunt labore deserunt quod
          dolore error nostrum, aliquid voluptas dolor iusto. Perferendis,
          maiores debitis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          amet sint ipsam at fuga eos cumque nesciunt labore deserunt quod
          dolore error nostrum, aliquid voluptas dolor iusto. Perferendis,
          maiores debitis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          amet sint ipsam at fuga eos cumque nesciunt labore deserunt quod
          dolore error nostrum, aliquid voluptas dolor iusto. Perferendis,
          maiores debitis!
        </p>
        <button>
          <Link to="/Home">To next</Link>
        </button>
      </div>
    );
  }
}
export default Main;
