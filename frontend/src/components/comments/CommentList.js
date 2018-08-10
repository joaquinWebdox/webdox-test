import React from "react";
import { Table } from "reactstrap";
import { CommentItem } from "./CommentItem";

export const CommentList = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {props.comments.map((comment, index) => (
          <CommentItem key={index} {...comment} />
        ))}
      </tbody>
    </Table>
  );
};
