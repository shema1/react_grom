import React, { Component } from "react";

class Life extends Component {
  constructor(props){
    super(props)
    console.log('=> constructor')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps, nextState)
    console.log('=> shouldComponentUpdate')
    return nextProps.number %2
  }

  
  shouldDidUpdate(prevProps, prevState){
    console.log(prevProps)
    console.log('=>  shouldDidUpdate')
  }

  commponentDidMount(){
    console.log('=> commponentDidMount')
  }

  commponentWillUnmount(){
    console.log('=> commponentWillUnmount')
  }
render(){
  console.log('=> render')
  return <div className="nummber"></div>
}
};

export default Life;
