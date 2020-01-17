import React, { Component } from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {
  state = {
    sorting: null
  };

  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.map(elem =>(
           <Transaction key={elem.id} {...elem}/>
        ))}
       
      </ul>
    );
  }
}

export default TransactionsList;
