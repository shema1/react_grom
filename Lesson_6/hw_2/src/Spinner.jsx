import React from "react";

const Spinner = prop => {
  const style = {
    width: prop.size,
    height: prop.size
  };
  return <span className="spinner" style={style}></span>;
};

export default Spinner;
