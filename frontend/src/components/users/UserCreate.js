import React, { Component } from "react";
import { UserForm } from "./UserForm";
import { createUser } from "./UserService";

class UserCreate extends Component {
  state = {
    id: undefined,
    name: "",
    email: "",
    role: "",
    password: "",
    password_confirmation: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };

    createUser(newUser).then(() => console.log("User created!"));
  };

  render() {
    const { newUser } = this.state;
    return (
      <div>
        <h4>New User</h4>
        <UserForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          {...newUser}
        />
      </div>
    );
  }
}

export default UserCreate;
