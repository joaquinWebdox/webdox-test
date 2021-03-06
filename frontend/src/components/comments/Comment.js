import React, { Component } from "react";
import { CommentList } from "./CommentList";
import { CommentForm } from "./CommentForm";
import { createComment } from "./CommentService";

class Comment extends Component {
  state = {
    comments: [],
    comment: {}
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    Object.assign(this.state.comment, { [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newComment = {
      user_id: this.state.comment.user_id,
      ticket_id: this.state.comment.ticket_id,
      content: this.state.comment.content
    };

    createComment(newComment).then(() => console.log("Comment created!"));
  };

  render() {
    const comments = this.props.comments;

    return (
      <div>
        <CommentList comments={comments} />
        <CommentForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Comment;
