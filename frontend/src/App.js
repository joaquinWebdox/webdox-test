import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./components/store/index";
import { Container, Row, Col } from "reactstrap";

import Access from "./components/login/Access";
import { Menu } from "./components/dashboard/Menu";
import { Routes } from "./components/dashboard/Routes";

class App extends Component {
  isLoggedIn = () => {
    return true;
  };

  render() {
    console.log("logged", this.state);
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <Row>
              <Col md="12">
                {this.isLoggedIn() ? (
                  <div>
                    <Menu />
                    <Routes />
                  </div>
                ) : (
                  <Access />
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
