import React, { Component } from 'react';
import Feed from './components/Feed/Feed'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='title-area'>
            <div className='grey-bar' />
            <h2>r/Business</h2>
            <div className='grey-bar' />
          </div>
          <Feed />
        </header>
      </div>
    );
  }
}

export default App;
