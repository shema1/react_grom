import React from "react";
import moment from "moment"

const Transaction = ({from, to, amount, rate, time}) => {
  let num = new Intl.NumberFormat("en");
  return (
      <li className="transaction">
        <span className="transaction__date">{moment(time).format("DD MMM")} </span>
        <span className="transaction__time"> {moment(time).format("HH:MM")} </span>
        <span className="transaction__assets"> {from} → {to} </span>
        <span className="transaction__rate"> {num.format(rate)} </span>
        <span className="transaction__amount"> {num.format(amount)}</span>
      </li>
  );
};

export default Transaction;
