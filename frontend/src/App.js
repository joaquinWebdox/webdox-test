import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Ticket from "./components/tickets/Ticket";
import TicketCreate from "./components/tickets/TicketCreate";
import TicketEdit from "./components/tickets/TicketEdit";
import { destroyTicket } from "./components/tickets/TicketService";

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
                  </ul>

                  <hr />

                  <Route exact path="/tickets" component={Ticket} />
                  <Route exact path="/tickets/new" component={TicketCreate} />
                  <Route
                    exact
                    path="/tickets/:id/edit"
                    component={TicketEdit}
                  />
                  <Route
                    exact
                    path="/tickets/:id/destroy"
                    render={({ match }) => {
                      destroyTicket(match.params.id).then(() => (
                        <Redirect to="/tickets" />
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
