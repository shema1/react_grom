import React, { Component, useState } from "react";
import Clock from "./Clock";

const App = () => {
  const [hiden, setHiden] = useState(true);
  return (
    <>
      <button onClick={() => setHiden(hiden ? false : true)}>hiden</button>
      {hiden && <Clock location="Kiyv" offset={2} />}
      {hiden && <Clock location="London" offset={0} />}
      {hiden && <Clock location="New York" offset={-5} />}
    </>
  );
};

export default App;
