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
    const filterUsers = this.props.users
      .filter(user => user.name == this.state. inputValue)
      .map(user => <User key={user.id} name={user.name} age={user.age} />);

    const defaultUsers = this.props.users.map(user => (
      <User key={user.id} {...user} />
    ));

    return (
      <div>
        <Filter
          onChange={this.handleChange}
          filterText={this.state.inputValue}
          count={this.state.inputValue?filterUsers.length:defaultUsers.length}
        />
        <ul className="users">
          {this.state.inputValue?filterUsers:defaultUsers }
        </ul>
      </div>
    );
  }
}

export default UserList;
