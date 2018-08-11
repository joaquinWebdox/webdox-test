import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Menu } from "./components/dashboard/Menu";
import { Routes } from "./components/dashboard/Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
              <Menu />
              <Routes />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
