import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends Component {
  state = {
    page: 0,
    itemsPerPage: 3
  };

  goPrev = () => {
    this.setState({
      page: this.state.page - 1
    });
  };

  goNext = () => {
    this.setState({
      page: this.state.page + 1
    });
  };
  render() {
    const selectedUsers = [];
    const startIndex = this.state.page * this.state.itemsPerPage;

    for (let i = startIndex; i < this.state.itemsPerPage + startIndex; i++) {
      if(i === this.props.users.length) break
      selectedUsers.push(this.props.users[i]);
    }

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          page={this.state.page}
          itemsPerPage={this.state.itemsPerPage}
          users={this.props.users.length}
        />
        <ul className="users">
          {selectedUsers.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
