import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

export const UserForm = props => (
  <Form>
    <FormGroup row>
      <Col md="6">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={props.handleInputChange}
            value={props.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            onChange={props.handleInputChange}
            value={props.email}
          />
        </FormGroup>

        <FormGroup>
          <Label for="role">Role</Label>
          <Input
            type="text"
            name="role"
            onChange={props.handleInputChange}
            value={props.role}
          />
        </FormGroup>
      </Col>

      <Col md="6">
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={props.handleInputChange}
            value={props.password}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password_confirmation">Password confirmation</Label>
          <Input
            type="password"
            name="password_confirmation"
            onChange={props.handleInputChange}
            value={props.password_confirmation}
          />
        </FormGroup>
      </Col>
    </FormGroup>

    <Button onClick={props.handleSubmit}>Save</Button>
  </Form>
);
