import React, { Component } from "react";
import { connect } from "react-redux";
import { createSession } from "../../components/actions";
import { LoginForm } from "./LoginForm";
import { login } from "./SessionService";

const mapDispatchToProps = dispatch => {
  return {
    createSession: data => dispatch(createSession(data))
  };
};

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newSession = {
      email: this.state.email,
      password: this.state.password
    };

    login(newSession).then(data =>
      this.props.createSession({ token: data.token })
    );
  };

  render() {
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

const Access = connect(
  null,
  mapDispatchToProps
)(Login);

export default Access;
