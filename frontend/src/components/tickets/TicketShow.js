import React, { Component } from "react";
import { getTicket } from "./TicketService";
import Comment from "../comments/Comment";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";

class TicketShow extends Component {
  state = {
    id: undefined,
    title: "",
    description: "",
    user_assigned: undefined,
    user_owned: undefined,
    status: "",
    comments: []
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
        status: ticket.status,
        comments: ticket.comments
      });
    });
  }

  render() {
    const ticket = this.state;

    return (
      <div>
        <Media>
          <Media body>
            <Media heading>{ticket.title}</Media>
            {ticket.description}
          </Media>
        </Media>
        <Comment comments={ticket.comments} />
        <Link to={`/tickets/${ticket.id}/close`}>Close Ticket</Link>
      </div>
    );
  }
}

export default TicketShow;
