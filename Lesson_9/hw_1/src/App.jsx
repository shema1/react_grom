import React from "react";
import UserList from "./UserList";


const users = [
  {
    id: "0",
    name: "ooo",
    age: 12
  },
  {
    id: "2",
    name: "test2",
    age: 12
  },
  {
    id: "3",
    name: "test3",
    age: 12
  },
  {
    id: "4",
    name: "test4",
    age: 12
  },
  {
    id: "5",
    name: "test5",
    age: 12
  },
  {
    id: "6",
    name: "test6",
    age: 12
  },
  {
    id: "7",
    name: "test7",
    age: 12
  }
];

const App = () => {
  return <UserList  users={users}/>;
};

export default App;
