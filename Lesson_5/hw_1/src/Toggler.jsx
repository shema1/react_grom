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
    console.log(this.state3.isToggleOn + "asdfsd")
    this.setState(state3 =>({
      isToggleOn: !state3.isToggleOn
    }))
  }

  render() {
    return (
    <button onClick={this.handleClick} >{this.state.isToggleOn?'ON':'OFF'}</button>
    );
  }
}

export default Toggler;
