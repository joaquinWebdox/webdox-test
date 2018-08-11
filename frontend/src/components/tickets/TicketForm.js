import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

export const TicketForm = props => (
  <Form>
    <FormGroup row>
      <Col md="12">
        <FormGroup>
          <Label for="title">title</Label>
          <Input
            type="text"
            name="title"
            onChange={props.handleInputChange}
            value={props.title}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            onChange={props.handleInputChange}
            value={props.description}
          />
        </FormGroup>
      </Col>

      <Col md="4">
        <FormGroup>
          <Label for="user_assigned">User assigned</Label>
          <Input
            type="text"
            name="user_assigned"
            onChange={props.handleInputChange}
            value={props.user_assigned}
          />
        </FormGroup>
      </Col>

      <Col md="4">
        <FormGroup>
          <Label for="user_owned">User Owned</Label>
          <Input
            type="text"
            name="user_owned"
            onChange={props.handleInputChange}
            value={props.user_owned}
          />
        </FormGroup>
      </Col>

      <Col md="4">
        <FormGroup>
          <Label for="status">Status</Label>
          <Input
            type="text"
            name="status"
            onChange={props.handleInputChange}
            value={props.status}
          />
        </FormGroup>
      </Col>
    </FormGroup>

    <Button onClick={props.handleSubmit}>Save</Button>
  </Form>
);
