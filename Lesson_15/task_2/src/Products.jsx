import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product";

const Products = ({match}) => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>ball</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/book">book</Link>
        </li>
      </ul>
      <Route path="/products/:productId" component={Product}></Route>
      <Route exact path="/products">
        <span>Select a product please</span>
      </Route>
    </div>
  );
};

export default Products;
