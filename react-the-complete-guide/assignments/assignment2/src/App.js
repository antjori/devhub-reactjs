import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    text: ""
  };

  textChangedHandler = event => {
    this.setState({ text: event.target.value });
  };

  deleteCharHandler = charIndex => {
    const chars = this.state.text.split("");
    chars.splice(charIndex, 1);
    this.setState({ text: chars.join("") });
  };

  render() {
    let chars = (
      <div>
        {this.state.text.split("").map((char, index) => (
          <Char
            char={char}
            key={char + index}
            click={() => this.deleteCharHandler(index)}
          />
        ))}
      </div>
    );

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangedHandler}
          value={this.state.text}
        />
        <p>Text length: {this.state.text.length}</p>
        <Validation length={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
