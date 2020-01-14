import React, { Component } from "react";
import "./clock.scss";
import moment from "moment";




const formatDate = offset=> moment().utcOffset(offset).format("HH:mm:ss")

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location: props.location,
      time: formatDate(props.offset)
    };

    setInterval(() => {
      this.setState({
        time: formatDate(props.offset)
      });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
  <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
