import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
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
                  <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Webdox test</NavbarBrand>
                    <Collapse isOpen={true} navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/tickets">Tickets</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/users">Users</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>

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
