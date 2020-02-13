import React from "react";

const User = ({ match }) => {
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={
          match.params.userId === "facebook"
            ? "https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg"
            : "https://avatars1.githubusercontent.com/u/9919?v=4"
        }
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{match.params.userId}</span>
        <span className="user__location">
          {" "}
          {match.params.userId === "facebook"
            ? "Menlo Park, CA"
            : "San Francisco,CA"}
        </span>
      </div>
    </div>
  );
  ("https://avatars1.githubusercontent.com/u/9919?v=4");
};

export default User;
