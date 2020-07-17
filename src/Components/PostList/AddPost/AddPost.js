import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  Box,
  Flex,
  Text,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/core";
import { PRIMARY_COLOR, VARIANT_COLOR } from "../../ThemSelector/ThemeSelector";

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
      <Flex
        mt={10}
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          textAlign="center"
          borderWidth={1}
          borderRadius="lg"
          px={4}
          width="full"
          maxWidth="40%"
          boxShadow="lg"
          p={4}
          py={8}
        >
          <form onSubmit={this.submitInfo}>
            <FormControl textAlign="left">
              <FormLabel>New Post Title:</FormLabel>
              <Input
                type="text"
                required
                placeholder="New Title"
                onChange={(event) => this.handleChangeFor("postTitle", event)}
              />
              <br />
              <FormLabel>New Post Content:</FormLabel>
              <Textarea
                type="text"
                required
                placeholder="Post Content"
                rows="8"
                cols="50"
                onChange={(event) => this.handleChangeFor("postBody", event)}
              />
              <br />
              <br />
              <Button variantColor={PRIMARY_COLOR} size="small" type="submit">
                Post
              </Button>
              <button
                variant="contained"
                color="secondary"
                size="small"
                onClick={this.cancel}
              >
                Cancel
              </button>
            </FormControl>
          </form>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
export default withRouter(connect(mapStateToProps)(Edit));
