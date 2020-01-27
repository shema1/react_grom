import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class Numbers extends PureComponent {
    shouldComponentUpdate(nextProps) {

        if(this.props.number === nextProps.number && this.props.title === nextProps.title )return false

        return true
      }
  render() {
    return (
      <div class="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

Numbers.propTypes  = {
    title: PropTypes.string,
    number: PropTypes.number.isRequired
}

Numbers.propProps  = {
    title: "some text", 
}


export default Numbers;
