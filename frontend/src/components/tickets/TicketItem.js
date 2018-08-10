import React from "react";
import { Link } from "react-router-dom";

export const TicketItem = props => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.user_assigned.name}</td>
      <td>{props.user_owned.name}</td>
      <td>{props.status}</td>
      <td>
        <Link to={`/tickets/${props.id}/edit`}>edit</Link>
        <Link to={`/tickets/${props.id}/destroy`}>destroy</Link>
      </td>
    </tr>
  );
};
