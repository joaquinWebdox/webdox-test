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
      name="description"
      onChange={props.handleInputChange}
      value={props.description}
    />
    <input
      type="number"
      name="user_assigned"
      onChange={props.handleInputChange}
      value={props.user_assigned}
    />
    <input
      type="number"
      name="user_owned"
      onChange={props.handleInputChange}
      value={props.user_owned}
    />
    <input
      type="text"
      name="status"
      onChange={props.handleInputChange}
      value={props.status}
    />
    <button onClick={props.handleSubmit}>Save</button>
  </form>
);
