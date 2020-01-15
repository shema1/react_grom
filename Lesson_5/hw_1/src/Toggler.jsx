import React, { Component } from "react";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

class Toggler extends Component {
  constructor(props){
    super(props)
    this.state ={
      isToggleOn: true
    }
  }

  handleClick=()=>{
    console.log(this.state.isToggleOn)
    this.setState(state =>({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
    <button onClick={this.handleClick} >{this.state.isToggleOn?'ON':'OFF'}</button>
    );
  }
}

export default Toggler;
