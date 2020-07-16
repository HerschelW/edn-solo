import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { TextField, Button } from "@material-ui/core";

class Edit extends Component {
  // The edit component allows the user to change the title and or description of a movie.
  state = {
    newResource: {
      resourceTitle: "",
      resourceBody: "",
    },
  };

  handleChangeFor = (propertyName, event) => {
    // Updates our local state when input is changed
    this.setState({
      newResource: {
        ...this.state.newResource,
        [propertyName]: event.target.value,
      },
    });
  };

  cancel = (event) => {
    this.props.history.push("/resources");
  };

  submitInfo = (event) => {
    // Updates the information with our current local state

    this.props.dispatch({
      type: "ADD_RESOURCE",
      payload: this.state.newResource,
    });
    this.setState({
      // clears local state
      newResource: {
        resourceTitle: "",
        resourceBody: "",
      },
    });
    this.props.history.push("/resources");
  };

  render() {
    return (
      <div className="content addContent">
        <p>New Resource Title:</p>
        <form onSubmit={this.submitInfo}>
          <textarea
            className="postTitle"
            type="text"
            required
            //placeholder="New Title"
            label="Title"
            onChange={(event) => this.handleChangeFor("resourceTitle", event)}
          />
          <br />
          <p>New Resource Content:</p>
          <textarea
            className="postContent"
            type="text"
            required
            //placeholder="New Description"
            rows="4"
            cols="50"
            label="Resource Content"
            onChange={(event) => this.handleChangeFor("resourceBody", event)}
          />
          <br />
          <br />
          <button
            className="btn"
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Submit
          </button>
          <button
            className="btn"
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

{
  /* <div className="content">
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
    <button variant="contained" color="primary" size="small" type="submit">
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
</div>; */
}
