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
            type="select"
            name="user_assigned"
            onChange={props.handleInputChange}
            value={props.user_assigned}
          >
            {props.users.map((user, index) => {
              return (
                <option key={index} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </Input>
        </FormGroup>
      </Col>

      <Col md="4">
        <FormGroup>
          <Label for="user_owned">User Owned</Label>
          <Input
            type="select"
            name="user_owned"
            onChange={props.handleInputChange}
            value={props.user_owned}
          >
            {props.users.map((user, index) => {
              return (
                <option key={index} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </Input>
        </FormGroup>
      </Col>

      <Col md="4">
        <FormGroup>
          <Label for="status">Status</Label>
          <Input
            type="select"
            name="status"
            onChange={props.handleInputChange}
            value={props.status}
          >
            <option value="open">Open</option>
            <option value="in_process">In process</option>
            <option value="closed">Closed</option>
          </Input>
        </FormGroup>
      </Col>
    </FormGroup>

    <Button onClick={props.handleSubmit}>Save</Button>
  </Form>
);
