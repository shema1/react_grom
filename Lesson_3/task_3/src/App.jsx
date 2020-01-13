import React from "react";
import Comment from "./Comment"

const userInfo = {
  name: "Mykola",
  avatarUrl: "https://avatars2.githubusercontent.com/u/25904621?s=40&v=4"
};

const App = () => {
  return (
    <Comment
      user={userInfo}
      text="Good job!"
      date={new Date("2013-01-01T11:32:19.566Z")}
    />
  );
};

export default App