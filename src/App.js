/*jshint esversion: 6 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const QUOTES = [
["This is a random quote number 1", "Author 1"],
["This is a random quote number 2", "Author 2"],
["This is a random quote number 3", "Author 3"],
["This is a random quote number 4", "Author 4"],
["This is a random quote number 5", "Author 5"],
["This is a random quote number 6", "Author 6"],
["This is a random quote number 7", "Author 7"],
["This is a random quote number 8", "Author 8"],
["This is a random quote number 9", "Author 9"],
];
const COLORS = "purple";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      author: "Default Author",
      quote: "Default quote"
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  getRandomQuote(){
    let quoteIndex = Math.floor(Math.random()*9);
    this.setState({
      quote: QUOTES[quoteIndex][0],
      author: QUOTES[quoteIndex][1]
    });
    console.log(quoteIndex);
  }
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
          <button id="new-quote" onClick={this.getRandomQuote}>
            New quote
          </button>
          <button id="tweet-quote" >Tweet</button>
        </div>
      </div>
    );
  }
}

export default App;
