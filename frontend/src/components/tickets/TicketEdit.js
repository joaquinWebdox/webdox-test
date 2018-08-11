import React, { Component } from "react";
import { TicketForm } from "./TicketForm";
import { getTicket, updateTicket } from "./TicketService";
import { getUsers } from "../users/UserService";
import { Redirect } from "react-router-dom";

class TicketEdit extends Component {
  state = {
    ticket: {},
    users: [],
    updated: false
  };

  componentWillMount() {
    const id = this.props.match.params.id;

    getUsers().then(users => this.setState({ users }));

    getTicket(id).then(ticket => {
      this.setState({
        ticket: {
          id: ticket.id,
          title: ticket.title,
          description: ticket.description,
          user_assigned: ticket.user_assigned.id,
          user_owned: ticket.user_owned.id,
          status: ticket.status
        }
      });
    });
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const ticketState = this.state.ticket;

    Object.keys(ticketState).forEach(function(key) {
      if (key === name) {
        ticketState[key] = value;
      }
    });

    this.setState({
      ticket: ticketState
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const ticket = this.state.ticket;

    updateTicket(ticket).then(() => this.setState({ updated: true }));
  };

  render() {
    const ticket = this.state.ticket;
    const users = this.state.users;
    if (this.state.updated === true) return <Redirect to="/tickets" />;

    return (
      <div>
        <h4>Edit Ticket</h4>
        <TicketForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          {...ticket}
          users={users}
        />
      </div>
    );
  }
}

export default TicketEdit;
