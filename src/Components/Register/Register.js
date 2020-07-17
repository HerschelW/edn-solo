import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Button,
  FormLabel,
  Text,
  Input,
} from "@chakra-ui/core";
import RegisterToast from "./RegisterButton/RegisterButton";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  registerUser = (event) => {
    event.preventDefault();

    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password
    ) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
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
          maxWidth="30%"
          textAlign="center"
          boxShadow="lg"
          p={4}
          py={8}
        >
          {this.props.errors.registrationMessage && (
            <h2 className="alert" role="alert">
              {this.props.errors.registrationMessage}
            </h2>
          )}
          <form onSubmit={this.registerUser}>
            <Heading py={4}>Register Account</Heading>
            <FormControl textAlign="left">
              <div>
                <FormLabel>First Name</FormLabel>
                <label htmlFor="firstName">
                  <Input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleInputChangeFor("firstName")}
                  />
                </label>
              </div>
              <div>
                <FormLabel mt={4}>Last Name</FormLabel>
                <label htmlFor="lastName">
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleInputChangeFor("lastName")}
                  />
                </label>
              </div>
              <div>
                <FormLabel mt={4}>Email Address</FormLabel>
                <label htmlFor="email">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChangeFor("email")}
                  />
                </label>
              </div>
              <div>
                <FormLabel mt={4}>Password</FormLabel>
                <label htmlFor="password">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor("password")}
                  />
                </label>
              </div>
              <div>
                <RegisterToast />
              </div>
            </FormControl>
          </form>
          <Text>or</Text>
          <Button
            width="full"
            mt={4}
            type="button"
            className="link-button btn"
            onClick={() => {
              this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
            }}
          >
            Login
          </Button>
        </Box>
      </Flex>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Register);
