import React from "react";
import { Table } from "reactstrap";
import { TicketItem } from "./TicketItem";

export const TicketList = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Owner</th>
          <th>Assigned</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.tickets.map((ticket, index) => (
          <TicketItem key={index} {...ticket} />
        ))}
      </tbody>
    </Table>
  );
};
