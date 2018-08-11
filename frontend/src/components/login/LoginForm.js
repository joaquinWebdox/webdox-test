import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

export const LoginForm = props => (
  <Form>
    <FormGroup row>
      <Col md="6">
        <FormGroup>
          <Label for="content">email</Label>
          <Input
            type="text"
            name="email"
            onChange={props.handleInputChange}
            value={props.email}
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup>
          <Label for="password">password</Label>
          <Input
            type="password"
            name="password"
            onChange={props.handleInputChange}
            value={props.password}
          />
        </FormGroup>
      </Col>
    </FormGroup>

    <Button onClick={props.handleSubmit}>Access</Button>
  </Form>
);
