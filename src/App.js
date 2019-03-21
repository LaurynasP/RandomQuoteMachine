import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      author: "",
      quote: ""
    }
  }
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <p id="text"></p>
          <p id="author"></p>
          <button id="new-quote" >New quote</button>
          <button id="tweet-quote" >Tweet</button>
        </div>
      </div>
    );
  }
}

export default App;
