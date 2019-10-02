import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    usernames: ["antjori", "ant", "jo", "ri"]
  };

  changeStateHandler = event => {
    this.setState({
      usernames: [event.target.value, "ant", "jo", "ri"]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changeStateHandler}
          original={this.state.usernames[0]}
        />
        <UserOutput username={this.state.usernames[0]} />
        <UserOutput username={this.state.usernames[1]} />
        <UserOutput username={this.state.usernames[2]} />
        <UserOutput username={this.state.usernames[3]} />
      </div>
    );
  }
}

export default App;
