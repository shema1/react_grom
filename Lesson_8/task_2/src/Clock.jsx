import React, { Component } from "react";
import moment from "moment";

// const formatDate = offset=>
//   moment()
//     .utcOffset(offset)
//     .format("HH:mm:ss");

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const time = moment(this.state.date)
      .utcOffset(this.props.offset)
      .format("HH:mm:ss");
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{time}</div>
      </div>
    );
  }
}

export default Clock;
