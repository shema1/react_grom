import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";
class Status extends Component {
  constructor(props) {
    super();
    this.state = {
      status: true
    };
  }

  render() {
    return <div>{this.state.status ? <Online /> : <Offline />}</div>;
  }
}

export default Status;
