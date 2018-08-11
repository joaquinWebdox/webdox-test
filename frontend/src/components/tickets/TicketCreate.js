import React, { Component } from "react";
import { TicketForm } from "./TicketForm";
import { createTicket } from "./TicketService";
import { Redirect } from "react-router-dom";

class TicketCreate extends Component {
  state = {
    ticket: {},
    created: false
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    Object.assign(this.state.ticket, { [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newTicket = {
      title: this.state.ticket.title,
      description: this.state.ticket.description,
      user_assigned: Number(this.state.ticket.user_assigned),
      user_owned: Number(this.state.ticket.user_owned),
      status: this.state.ticket.status
    };

    createTicket(newTicket).then(() => this.setState({ created: true }));
  };

  render() {
    if (this.state.created === true) return <Redirect to="/tickets" />;

    return (
      <div>
        <h4>New Ticket</h4>
        <TicketForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default TicketCreate;
