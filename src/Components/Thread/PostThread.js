import React, { Component } from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/core";
import AddComment from "../Comment/AddComment";

class PostThread extends Component {
  render() {
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
          <Button m={1} id={this.props.postItem.id} onClick={this.addPostLike}>
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

export default PostThread;
