import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div class="page__content">
      <h1>Contacts</h1>
      <p>We are here 🗺</p>
      <Link to="/">
        <a href="/">Go home</a>
      </Link>
    </div>
  );
};

export default Contacts;
