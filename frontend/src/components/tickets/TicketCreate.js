import React, { Component } from "react";
import { TicketForm } from "./TicketForm";
import { createTicket } from "./TicketService";

class TicketCreate extends Component {
  state = {
    title: "",
    description: "",
    user_assigned: undefined,
    user_owned: undefined,
    status: ""
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
      description: this.state.description,
      user_assigned: Number(this.state.user_assigned),
      user_owned: Number(this.state.user_owned),
      status: this.state.status
    };

    createTicket(newTicket).then(() => console.log("Ticket created!"));
  };

  render() {
    const { newTicket } = this.state;
    return (
      <div>
        <h4>New</h4>
        <TicketForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          {...newTicket}
        />
      </div>
    );
  }
}

export default TicketCreate;
