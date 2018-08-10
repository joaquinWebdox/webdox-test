import React from "react";

export const TicketItem = props => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.status}</td>
      <td>{props.status}</td>
    </tr>
  );
};
