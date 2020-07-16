import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { TextField, Button } from "@material-ui/core";

class Edit extends Component {
  // The edit component allows the user to change the title and or description of a movie.
  state = {
    newPost: {
      postTitle: "",
      postBody: "",
    },
  };

  handleChangeFor = (propertyName, event) => {
    // Updates our local state when input is changed
    this.setState({
      newPost: {
        ...this.state.newPost,
        [propertyName]: event.target.value,
      },
    });
  };

  cancel = (event) => {
    this.props.history.push("/");
  };

  submitInfo = (event) => {
    // Updates the information with our current local state

    this.props.dispatch({ type: "ADD_POST", payload: this.state.newPost });
    this.setState({
      // clears local state
      newPost: {
        postTitle: "",
        postBody: "",
      },
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="content">
        <p>New Post Title:</p>
        <form onSubmit={this.submitInfo}>
          <textarea
            className="postTitle"
            type="text"
            required
            placeholder="New Title"
            rows="1"
            onChange={(event) => this.handleChangeFor("postTitle", event)}
          />
          <br />
          <p>New Post Content:</p>
          <textarea
            className="postContent"
            type="text"
            required
            placeholder="Post Content"
            rows="8"
            cols="50"
            onChange={(event) => this.handleChangeFor("postBody", event)}
          />
          <br />
          <br />
          <button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Post
          </button>
          <button
            variant="contained"
            color="secondary"
            size="small"
            onClick={this.cancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
export default withRouter(connect(mapStateToProps)(Edit));
