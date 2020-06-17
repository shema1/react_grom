import React from "react";
import Spinner from "./Spiner";

const withDataLoader = (url) => {
  return function (Component) {
    return class Container extends React.Component {
      state = "";
      componentDidMount() {
        this.get();
      }

      get = () => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => this.setState(data));
      };

      render() {
        return this.state === "" ? (
          <Spinner />
        ) : (
          <Component data={this.state} />
        );
      }
    };
  };
};

export default withDataLoader;
