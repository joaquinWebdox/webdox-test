import React, { Component } from "react";
import { Table } from "reactstrap";
import { TicketItem } from "./TicketItem";
import { all } from "./TicketService";

class TicketList extends Component {
  state = {
    tickets: []
  };

  componentWillMount() {
    all().then(tickets => this.setState({ tickets }));
  }

  render() {
    const tickets = this.state.tickets;

    return (
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 &&
            tickets.map(ticket => <TicketItem key={ticket.id} {...ticket} />)}
        </tbody>
      </Table>
    );
  }
}

export default TicketList;
