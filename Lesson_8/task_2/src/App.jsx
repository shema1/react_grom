import React from "react";
import Clock from "./Clock";

const App = () => {
  return (
    <>
      <Clock location="Lviv" offset={2} />
      <Clock location="London" offset={0} />
      <Clock location="New York" offset={-5} />
    </>
  );
};

export default App;
