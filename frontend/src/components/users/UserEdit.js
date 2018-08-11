import React, { Component } from "react";
import { UserForm } from "./UserForm";
import { getUser, updateUser } from "./UserService";
import { Redirect } from "react-router-dom";

class UserEdit extends Component {
  state = {
    user: {},
    updated: false
  };

  componentWillMount() {
    const id = this.props.match.params.id;

    getUser(id).then(user => {
      this.setState({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    });
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const userState = this.state.user;

    Object.keys(userState).forEach(function(key) {
      if (key === name) {
        userState[key] = value;
      }
    });

    this.setState({
      user: userState
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const user = this.state.user;

    updateUser(user).then(() => this.setState({ updated: true }));
  };

  render() {
    const user = this.state.user;
    if (this.state.updated === true) return <Redirect to="/users" />;

    return (
      <div>
        <h4>Edit User</h4>
        <UserForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          {...user}
        />
      </div>
    );
  }
}

export default UserEdit;
