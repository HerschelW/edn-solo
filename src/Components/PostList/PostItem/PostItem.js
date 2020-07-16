import React, { Component } from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";

class PostItem extends Component {
  state = {
    postID: this.props.postItem.id,
  };

  // addPostComment = () => {
  //   //
  // };

  // addPostLike = () => {
  //   //
  // };

  // Axios.delete(`/api/posts/${event.target.id}`)

  deletePost = (event) => {
    console.log("In delete");
    this.props.dispatch({ type: "DELETE_POST", payload: event.target.id });
    try {
      this.props.dispatch({ type: "FETCH_POSTS" });
    } catch (error) {
      console.log(error);
    }
    this.props.history.push("/");
  };

  addPostComment = (event) => {};

  addPostLike = (event) => {};

  editPost = (event) => {};

  render() {
    if (this.props.user.id === this.props.postItem.user_id) {
      return (
        <div className="postItem">
          <h2>{this.props.postItem.post_title}</h2>
          <p>{this.props.postItem.post_body}</p>
          <p>{this.props.postItem.likes}</p>
          <button id={this.props.postItem.id} onClick={this.addPostComment}>
            Comment
          </button>
          <button id={this.props.postItem.id} onClick={this.addPostLike}>
            Like
          </button>
          <button id={this.props.postItem.id} onClick={this.editPost}>
            Edit
          </button>
          <button id={this.props.postItem.id} onClick={this.deletePost}>
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div className="postItem">
          <h2>{this.props.postItem.post_title}</h2>
          <p>{this.props.postItem.post_body}</p>
          <p>{this.props.postItem.likes}</p>
          <button id={this.props.postItem.id} onClick={this.addPostComment}>
            Comment
          </button>
          <button id={this.props.postItem.id} onClick={this.addPostLike}>
            Like
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(PostItem));
