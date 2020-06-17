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


// const withDataLoader = (url) => (WrappedComponent) => {
//     class Wrapper extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 isLoading: true,
//                 data: null,
//             };
//         }
//         componentDidMount() {
//             fetch(url)
//                 .then((response) => {
//                     return response.json();
//                 })
//                 .then((data) => this.setState({ data, isLoading: false }));
//         }
//         render() {
//             const { isLoading, data } = this.state;
//             if (isLoading) {
//                 return <Spinner size={32} />;
//             }
//             return <WrappedComponent {...this.props} data={data} />;
//         }
//     }
//     return Wrapper;
// };