import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import PageNotFound from "./PageNotFound";

class App extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <div className="page">
        <BrowserRouter>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products" component={Products}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
