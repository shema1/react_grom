import React from "react";

const Logout = props => {
  return (
    <button className="logout btn" onClick={props.logOut}>
      Logout
    </button>
  );
};

export default Logout;
