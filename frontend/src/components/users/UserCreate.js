import React, { Component } from "react";
import { UserForm } from "./UserForm";
import { createUser } from "./UserService";
import { Redirect } from "react-router-dom";

class UserCreate extends Component {
  state = {
    user: {},
    created: false
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    Object.assign(this.state.user, { [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newUser = {
      name: this.state.user.name,
      email: this.state.user.email,
      role: this.state.user.role,
      password: this.state.user.password,
      password_confirmation: this.state.user.password_confirmation
    };

    createUser(newUser).then(() => this.setState({ created: true }));
  };

  render() {
    if (this.state.created === true) return <Redirect to="/users" />;

    return (
      <div>
        <h4>New User</h4>
        <UserForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default UserCreate;
