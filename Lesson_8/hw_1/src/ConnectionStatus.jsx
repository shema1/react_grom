import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: true
  };

  componentDidMount() {
    window.addEventListener("offline", this.setStatus);
    window.addEventListener("online", this.setStatus);
  }

  setStatus = e => {
    this.setState({
      status: !this.state.status
    });
  };

  componentWillUnmount() {
    window.removeEventListener("offline", this.setStatus);
    window.removeEventListener("online", this.setStatus);
  }

  render() {
    const statusOffline = this.state.status ? "" : "status_offline";

    return (
      <div className={"status " + statusOffline}>
        {this.state.status ? "online" : "offline"}
      </div>
    );
  }
}

export default ConnectionStatus;
