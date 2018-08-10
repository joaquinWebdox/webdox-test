import React, { Component } from "react";
import { TicketList } from "./TicketList";
import { getTickets } from "./TicketService";
import { Link } from "react-router-dom";

class Ticket extends Component {
  state = {
    tickets: []
  };

  componentWillMount() {
    getTickets().then(tickets => this.setState({ tickets }));
  }

  render() {
    const tickets = this.state.tickets;
    return (
      <div>
        <Link to="/tickets/new">New</Link>
        <TicketList tickets={tickets} />
      </div>
    );
  }
}

export default Ticket;
