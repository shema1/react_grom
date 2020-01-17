import React, { Component } from "react";

const Message = ({ text }) => {
  if (text) {
    return <div className="message">{text}</div>;
  }
  return null;
};

export default Message;
