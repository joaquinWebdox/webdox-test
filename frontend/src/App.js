import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {
  Ticket,
  TicketCreate,
  TicketEdit,
  TicketShow
} from "./components/tickets";
import { destroyTicket } from "./components/tickets/TicketService";
import { User, UserCreate, UserEdit } from "./components/users";
import { destroyUser } from "./components/users/UserService";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
              <Router>
                <div>
                  <ul>
                    <li>
                      <Link to="/tickets">Tickets</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul>

                  <hr />

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
                      destroyUser(match.params.id).then(() => (
                        <Redirect to="/users" />
                      ));
                    }}
                  />
                </div>
              </Router>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
