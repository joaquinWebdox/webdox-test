import React, { Component } from "react";
import { TicketForm } from "./TicketForm";
import { getTicket, update } from "./TicketService";

class TicketEdit extends Component {
  state = {
    ticket = {}
  };

  componentWillMount() {
    getTicket(id).then(ticket => this.setState({ ticket }));
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const ticket = {
      title: this.state.title,
      description: this.state.description
    };

    create(newTicket).then(() => console.log("Ticket updated!"));
  };

  render() {
    const { ticket } = this.state;
    return <TicketForm handleSubmit={this.handleSubmit} {...ticket} />;
  }
}

export default TicketEdit;
