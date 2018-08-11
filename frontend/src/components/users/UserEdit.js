import React, { Component } from "react";
import { UserForm } from "./UserForm";
import { getUser, updateUser } from "./UserService";

class UserEdit extends Component {
  state = {
    id: undefined,
    name: "",
    email: "",
    role: "",
    password: "",
    password_confirmation: ""
  };

  componentWillMount() {
    const id = this.props.match.params.id;

    getUser(id).then(user => {
      this.setState({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      });
    });
  }

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

    const user = this.state;

    updateUser(user).then(() => console.log("User updated!"));
  };

  render() {
    const user = this.state;

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
