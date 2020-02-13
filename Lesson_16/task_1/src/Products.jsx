import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div class="page__content">
      <h1>Products</h1>
      <p>We will add some products. Later... 😇</p>

      <Link to="/contacts">
        <a href="/contacts">Contacts</a>
      </Link>
    </div>
  );
};

export default Products;
