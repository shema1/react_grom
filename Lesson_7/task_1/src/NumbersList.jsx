import React, { Component } from "react";

const NumbersList = ({ numbers }) => {
  const numberElems = numbers.map(num => <li key={num}>{num}</li>);
  const element = <ul>{numberElems}</ul>;
  return element;
};

export default NumbersList;
