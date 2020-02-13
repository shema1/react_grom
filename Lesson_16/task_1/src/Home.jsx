import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="page__content">
      <h1>🏠</h1>
      <Link to="/products">
        <a href="/products">To products</a>
      </Link>
    </div>
  );
};

export default Home;
