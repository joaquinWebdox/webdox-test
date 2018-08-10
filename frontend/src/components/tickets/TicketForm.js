import React from "react";

export const TicketForm = props => (
  <form>
    <input
      type="text"
      name="title"
      onChange={props.handleInputChange}
      value={props.title}
    />
    <textarea
      id="content"
      name="description"
      onChange={props.handleInputChange}
      value={props.content}
    />
    <button onClick={props.handleSubmit}>Save</button>
  </form>
);
