import React from "react";
import { Table } from "reactstrap";
import { UserItem } from "./UserItem";

export const UserList = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.users.map((user, index) => (
          <UserItem key={index} {...user} />
        ))}
      </tbody>
    </Table>
  );
};
