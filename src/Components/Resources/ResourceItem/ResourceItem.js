import React, { Component } from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import { Flex, Box, Button, Text, Heading } from "@chakra-ui/core";
import AddComment from "../../Comment/AddComment";

// class ResourceItem extends Component {
//   render() {
//     return (
//       <div className="resourceItem resourceItem">
//         <h2>{this.props.resourceItem.title}</h2>
//         <p>{this.props.resourceItem.body}</p>
//         <p>{this.props.resourceItem.upvote_count}</p>
//         <button>Comment</button>
//         <button>Like</button>
//         <button>Report</button>
//       </div>
//     );
//   }
// }

// export default withRouter(connect()(ResourceItem));

class ResourceItem extends Component {
  state = {
    postID: this.props.resourceItem.id,
  };

  // addResourceComment = () => {
  //   //
  // };

  // addResourceLike = () => {
  //   //
  // };

  // Axios.delete(`/api/posts/${event.target.id}`)

  deleteResource = (event) => {
    console.log("In resource delete");
    this.props.dispatch({ type: "DELETE_RESOURCE", payload: event.target.id });
    try {
      this.props.dispatch({ type: "FETCH_RESOURCES" });
    } catch (error) {
      console.log(error);
    }
    this.props.history.push("/resources");
  };

  addResourceComment = (event) => {};

  addResourceLike = (event) => {};

  editResource = (event) => {};

  render() {
    if (this.props.user.id === this.props.resourceItem.user_id) {
      return (
        <Flex width="full" justifyContent="center">
          <Box
            m={4}
            textAlign="center"
            borderWidth={1}
            borderRadius="lg"
            px={4}
            width="full"
            maxWidth="100%"
            textAlign="center"
            boxShadow="lg"
            p={4}
            py={8}
          >
            <Heading as="h3" size="lg">
              {this.props.resourceItem.title}
            </Heading>
            <Text>{this.props.resourceItem.body}</Text>
            <Text>{this.props.resourceItem.upvote_count}</Text>
            <Button
              m={1}
              id={this.props.resourceItem.id}
              onClick={this.addResourceComment}
            >
              Comment
            </Button>
            <Button
              m={1}
              id={this.props.resourceItem.id}
              onClick={this.addResourceLike}
            >
              Like
            </Button>
            <Button
              m={1}
              id={this.props.resourceItem.id}
              onClick={this.editResource}
            >
              Edit
            </Button>
            <Button
              m={1}
              id={this.props.resourceItem.id}
              onClick={this.deleteResource}
            >
              Delete
            </Button>
            <AddComment
              postItem={this.props.resourceItem}
              userID={this.props.user.id}
            />
          </Box>
        </Flex>
      );
    } else {
      return (
        <div className="postItem">
          <h2>{this.props.resourceItem.title}</h2>
          <p>{this.props.resourceItem.body}</p>
          <p>{this.props.resourceItem.upvote_count}</p>
          <button
            id={this.props.resourceItem.id}
            onClick={this.addResourceComment}
          >
            Comment
          </button>
          <button
            id={this.props.resourceItem.id}
            onClick={this.addResourceLike}
          >
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

export default withRouter(connect(mapStateToProps)(ResourceItem));
