import React, { Component } from "react";

const NumbersList = ({ numbers }) => {
  const numberElems = numbers.map(num => <li>{num}</li>);
  const element = <ul>{numberElems}</ul>;
  return element;
};

export default NumbersList;
