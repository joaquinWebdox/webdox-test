import React from "react";

export const CommentForm = props => (
  <form>
    <textarea
      name="content"
      onChange={props.handleInputChange}
      value={props.content}
    />
    <button onClick={props.handleSubmit}>Send</button>
  </form>
);
