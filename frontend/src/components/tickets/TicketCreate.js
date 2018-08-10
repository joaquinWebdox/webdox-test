import React, { Component } from "react";
import { TicketForm } from "./TicketForm";
import { create } from "./TicketService";

class TicketCreate extends Component {
  state = {
    title: "",
    description: ""
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

    const newTicket = {
      title: this.state.title,
      description: this.state.description
    };

    create(newTicket).then(() => console.log("Ticket created!"));
  };

  render() {
    const { newTicket } = this.state;
    return (
      <TicketForm
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        {...newTicket}
      />
    );
  }
}

export default TicketCreate;
