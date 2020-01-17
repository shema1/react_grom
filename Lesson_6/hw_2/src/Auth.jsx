import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      spinner: false
    };
  }

  singUp = () => {
    this.setState({
      isLogin: true
    });
    this.showSpinner();
  };
  logOut = () => {
    this.setState({
      isLogin: false
    });
    this.showSpinner();
  };

  showSpinner = () => {
    this.setState({
      spinner: true
    });
    setTimeout(() => {
      this.setState({
        spinner: false
      });
    }, 2000);
  };
  render() {
    return (
      <>
        {!this.state.isLogin && !this.state.spinner && (
          <Login singUp={this.singUp} />
        )}
        {this.state.isLogin && !this.state.spinner && (
          <Logout logOut={this.logOut} />
        )}
        {this.state.spinner && <Spinner size={100} />}
      </>
    );
  }
}

export default Auth;
