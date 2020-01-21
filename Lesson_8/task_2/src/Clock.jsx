import React, { Component } from "react";
import moment from "moment";

const formatDate = offset =>
  moment()
    .utcOffset(offset)
    .format("HH:mm:ss");

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      date: formatDate(props.offset)
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.interval = this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
    <div className="clock__time">{this.state.date}</div>
      </div>
    );
  }
}

export default Clock;
