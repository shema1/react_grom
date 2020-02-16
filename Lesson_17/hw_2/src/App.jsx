import React, { Component } from "react";
import Clock from "./Clock";

const App = () => {
  return <>
  <Clock location={"Kiyv"} offset={2} />
  <Clock location={"London"} offset={0} />
  <Clock location={"Warsaw"} offset={1} />
  </>
};

export default App;
