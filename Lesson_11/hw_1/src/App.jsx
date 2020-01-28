import React, { Component } from "react";
import Expand from "./Expand";

class App extends Component {
  state = {
    isOpen: false
  };


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="app">
        <Expand title={"some title"} isOpen={this.state.isOpen} toggle={this.toggle}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
