import React from "react";

import UserList from "./UserList";

const App = () => {
  const users = [
    {
      age: 21,
      name: "Bob",
      id: "id-0"
    },
    {
      age: 18,
      name: "Sam",
      id: "id-1"
    },
    {
      age: 23,
      name: "Nick",
      id: "id-2"
    },
    {
      age: 29,
      name: "Jack",
      id: "id-3"
    }
  ];
  return <UserList users={users} />;
};

export default App;
