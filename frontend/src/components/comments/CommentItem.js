import React from "react";

export const CommentItem = props => {
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.content}</td>
    </tr>
  );
};
