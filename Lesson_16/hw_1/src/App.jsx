import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import PageNotFound from "./PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="page">
        <BrowserRouter>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users" component={Users}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
