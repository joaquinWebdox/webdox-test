import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

export const CommentForm = props => (
  <Form>
    <FormGroup row>
      <Col md="12">
        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            type="textarea"
            name="content"
            onChange={props.handleInputChange}
            value={props.content}
          />
        </FormGroup>
      </Col>
    </FormGroup>

    <Button onClick={props.handleSubmit}>Save</Button>
  </Form>
);
