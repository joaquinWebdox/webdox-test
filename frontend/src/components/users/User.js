import React, { Component } from "react";
import { UserList } from "./UserList";
import { getUsers } from "./UserService";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    getUsers().then(users => this.setState({ users }));
  }

  render() {
    const users = this.state.users;
    return (
      <div>
        <Link to="/users/new">New User</Link>
        <UserList users={users} />
      </div>
    );
  }
}

export default User;
