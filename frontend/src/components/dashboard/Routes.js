import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Ticket, TicketCreate, TicketEdit, TicketShow } from "../tickets";
import { destroyTicket } from "../tickets/TicketService";
import { User, UserCreate, UserEdit } from "../users";
import { destroyUser } from "../users/UserService";

export const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/tickets" component={Ticket} />
        <Route path="/tickets/new" component={TicketCreate} />
        <Route path="/tickets/:id/show" component={TicketShow} />
        <Route path="/tickets/:id/edit" component={TicketEdit} />
        <Route
          path="/tickets/:id/destroy"
          render={({ match }) => {
            destroyTicket(match.params.id).then(() => (
              <Redirect to="/tickets" />
            ));
          }}
        />

        <Route exact path="/users" component={User} />
        <Route path="/users/new" component={UserCreate} />
        <Route path="/users/:id/edit" component={UserEdit} />
        <Route
          path="/users/:id/destroy"
          render={({ match }) => {
            destroyUser(match.params.id).then(() => <Redirect to="/users" />);
          }}
        />
      </div>
    </Router>
  );
};
