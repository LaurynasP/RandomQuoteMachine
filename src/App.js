/*jshint esversion: 6 */
import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
const QUOTES = [
["Success is a science; if you have the conditions, you get the result.", "Oscar Wilde"],
["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"],
["The only thing necessary for the triumph of evil is for good men to do nothing.", "Edmund Burke"],
["My mama always said ‘Life is like a box of chocolate. You never know what you’re gonna get.’", "Forest Gump"],
["Education is not the learning of facts, it’s rather the training of the mind to think.", "Albert Einstein"],
["Be the change that you want to see in the world.", "Mahatma Gandhi"],
["A man is but a product of his thoughts. What he thinks he becomes.", "Mahatma Gandhi"],
["It takes nothing away from a human to be kind to an animal.", "Joaquin Phoenix"],
["All beings tremble before violence. All love life. All fear death. See yourself in others. Then whom can you hurt? What harm can you do?", "Buddha"],
];
const COLORS =
["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c",
 "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99",
 "#77B1A9", "#73A857"];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      author: "",
      quote: ""
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  getRandomQuote(){
    changeColor();
    let quoteIndex = Math.floor(Math.random()*QUOTES.length);
    this.setState({
      quote: QUOTES[quoteIndex][0],
      author: QUOTES[quoteIndex][1]
    });
  }
  componentDidMount(){
    this.getRandomQuote();
  }
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
          <a
            id = "tweet-quote"
            target = "_blank"
            href={"https://twitter.com/intent/tweet?hashtags=topquotes&text=" + '"' + this.state.quote + '" By ' + this.state.author}>
            <i className="fab fa-twitter-square button"></i>
          </a>
          <button
            id="new-quote"
            onClick={this.getRandomQuote}>
            New Quote!
          </button>
        </div>
      </div>
    );
  }
}
function changeColor(){
  let newColor = COLORS[Math.floor(Math.random()*COLORS.length)];
  $("body, #new-quote").css("background-color", newColor);
  $("#text, #author, #tweet-quote").css("color", newColor);
}
export default App;
