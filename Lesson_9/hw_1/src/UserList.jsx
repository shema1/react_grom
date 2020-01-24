import React, { Component } from "react";
import Filter from "./Filter";
import User from "./User";

class UserList extends Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    this.setState({
      inputValue: event.target.value
    });
  };
  render() {
 
    let filterUsers = this.props.users
      .filter(({ name }) =>
        !this.state.inputValue ? true : name === this.state.inputValue
      )
      .map(({ id, name, age }) => <User key={id} name={name} age={age} />);
    return (
      <div>
        <Filter
          onChange={this.handleChange}
          filterText={this.state.inputValue}
          count={filterUsers.length}
        />
        <ul className="users">{filterUsers}</ul>
      </div>
    );
  }
}

export default UserList;
