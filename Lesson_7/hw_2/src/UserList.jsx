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

    
    const startIndex = this.state.page * this.state.itemsPerPage;

    const selectedUser = this.props.users.slice(startIndex,  startIndex+ this.state.itemsPerPage)

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          page={this.state.page}
          itemsPerPage={this.state.itemsPerPage}
          userCount={this.props.users.length}
        />
        <ul className="users">
          {selectedUser.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
