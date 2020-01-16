import React, { Component } from "react";
import Greating from "./Greating";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  handelLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handelLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };
  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <button onClick={this.handelLogout}>Logout</button>;
    } else {
      button = <button onClick={this.handelLogin}>Login</button>;
    }
    return (
      <div className="panel">
        <Greating isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
