import React from "react";
import UserList from "./UserList";

const User = ({ name, age }) => {
  return (
    <li key={age} className="user">
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
};

export default User;
