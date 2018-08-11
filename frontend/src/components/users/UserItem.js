import React from "react";
import { Link } from "react-router-dom";

export const UserItem = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.role}</td>
      <td>
        <Link to={`/users/${props.id}/edit`}>edit</Link>
        {` `}
        <Link to={`/users/${props.id}/destroy`}>destroy</Link>
      </td>
    </tr>
  );
};
