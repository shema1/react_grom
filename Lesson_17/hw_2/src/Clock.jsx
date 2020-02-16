import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = props => {
  const [clock, setClock] = useState();

  useEffect(() => {
    const test = setInterval(() => {
      setClock(moment());
    });
    return () => {
      clearInterval(test);
    };
  });
  const time = moment(clock)
    .utcOffset(props.offset)
    .format("h:mm:ss");
  return (
    <div>
      <span>{props.location}</span>
      <span>{time}</span>
    </div>
  );
};

export default Clock;
