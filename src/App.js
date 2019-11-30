import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    const arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8];
    return (
      <div>
        <Header name={'name'} />
        <div className="content">
          {arr.map((v, i) => (
            <button key={i}>{v}</button>
          ))}
        </div>
        {arr.map((v, i) => (
          <Footer key={i} result={v} />
        ))}
      </div>
    );
  }
}

export default App;
