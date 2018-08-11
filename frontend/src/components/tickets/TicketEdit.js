import React, { Component } from "react";
import { TicketForm } from "./TicketForm";
import { getTicket, updateTicket } from "./TicketService";

class TicketEdit extends Component {
  state = {
    id: undefined,
    title: "",
    description: "",
    user_assigned: undefined,
    user_owned: undefined,
    status: ""
  };

  componentWillMount() {
    const id = this.props.match.params.id;

    getTicket(id).then(ticket => {
      this.setState({
        id: ticket.id,
        title: ticket.title,
        description: ticket.description,
        user_assigned: ticket.user_assigned.id,
        user_owned: ticket.user_owned.id,
        status: ticket.status
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

    const ticket = this.state;

    updateTicket(ticket).then(() => console.log("Ticket updated!"));
  };

  render() {
    const ticket = this.state;

    return (
      <div>
        <h4>Edit Ticket</h4>
        <TicketForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          {...ticket}
        />
      </div>
    );
  }
}

export default TicketEdit;
