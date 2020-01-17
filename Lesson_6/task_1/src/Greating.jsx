import React, { Component } from "react";
import UserGreeating from "./UserGreeating";
import GuestGreeting from "./GuestGreeting";

const Greating = props => {
  console.log(props);
  if (props.isLoggedIn) {
    return <UserGreeating />;
  }
  return <GuestGreeting />;
};

export default Greating;
