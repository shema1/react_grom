import React, { Component } from "react";

const CORAL = "coral";
const AQUA = "aqua";
const BISQUE = "bisque";

class ColorPicker extends Component {
  constructor(props){
    super(props)
    this.state={
      color : ""
    }
  }
  
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  changeColorName = (color) =>{
    this.setState({
      color
    })
  }

  resetColorName = () =>{
    this.setState({
      color: ""
    })
  }

  render() {
    return (
      <div>
  <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            style={{ backgroundColor: CORAL }}
            className="picker__button picker__button_coral"
            onClick={this.setBodyColor.bind(this,CORAL)}
            onMouseOver={this.changeColorName.bind(this, CORAL)}
            onMouseOut={this.resetColorName}
          ></button>
          <button
            style={{ backgroundColor: AQUA }}
            className="picker__button picker__button_aqua"
            onClick={() => this.setBodyColor(AQUA)}
            onMouseOver={this.changeColorName.bind(this, AQUA)}
            onMouseOut={this.resetColorName}
          ></button>
          <button
            style={{ backgroundColor: BISQUE }}
            className="picker__button  picker__button_bisque"
            onClick={() => this.setBodyColor(BISQUE)}
            onMouseOver={this.changeColorName.bind(this, BISQUE)}
            onMouseOut={this.resetColorName}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
