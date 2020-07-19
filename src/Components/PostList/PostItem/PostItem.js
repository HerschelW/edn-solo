import React, { Component } from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import { Flex, Box, Button, Heading, Text, IconButton } from "@chakra-ui/core";
import AddComment from "../../Comment/AddComment";

class PostItem extends Component {
  state = {
    postID: this.props.postItem.id,
  };

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
        <Flex width="full" justifyContent="center">
          <Box
            m={4}
            textAlign="center"
            borderWidth={1}
            borderRadius="lg"
            px={4}
            width="full"
            maxWidth="100%"
            boxShadow="lg"
            p={4}
            py={8}
          >
            {/* <div className="postItem"> */}
            <Heading as="h3" size="lg" mb={2}>
              {this.props.postItem.post_title}
            </Heading>
            <Text>By</Text>
            <Heading mb={2} as="h5" size="sm">
              {this.props.postItem.first_name}
            </Heading>
            <Text mb={8}>{this.props.postItem.post_body}</Text>
            <Text>{this.props.postItem.likes} Likes</Text>

            <Button
              m={1}
              id={this.props.postItem.id}
              onClick={this.addPostLike}
            >
              Like
            </Button>
            <Button m={1} id={this.props.postItem.id} onClick={this.editPost}>
              Edit
            </Button>
            <Button m={1} id={this.props.postItem.id} onClick={this.deletePost}>
              Delete
            </Button>
            <AddComment
              postItem={this.props.postItem}
              userID={this.props.user.id}
            />
          </Box>
        </Flex>
      );
    } else {
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
            boxShadow="lg"
            p={4}
            py={8}
          >
            <Heading as="h3" size="lg">
              {this.props.postItem.post_title}
            </Heading>
            <Text>By</Text>
            <Heading mb={2} as="h5" size="sm">
              {this.props.postItem.first_name}
            </Heading>
            <Text>{this.props.postItem.post_body}</Text>
            <p>{this.props.postItem.likes}</p>
            <Button
              m={1}
              id={this.props.postItem.id}
              onClick={this.addPostLike}
            >
              Like
            </Button>
            <AddComment
              postItem={this.props.postItem}
              userID={this.props.user.id}
            />
          </Box>
        </Flex>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(PostItem));
