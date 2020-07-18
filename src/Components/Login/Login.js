import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Flex,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  Stack,
  Checkbox,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { VARIANT_COLOR } from "../ThemSelector/ThemeSelector";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          email: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Flex
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
          {this.props.errors.loginMessage && (
            <h2 className="alert" role="alert">
              {this.props.errors.loginMessage}
            </h2>
          )}
          <form onSubmit={this.login}>
            <Heading py={4}>Please Login</Heading>
            <FormControl textAlign="left">
              <div>
                <FormLabel>Email Address</FormLabel>
                <label htmlFor="email">
                  <Input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
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
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.handleInputChangeFor("password")}
                  />
                </label>
              </div>
              <Stack justifyContent="space-between" mt={4}>
                <Box>
                  <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                  <Link color="teal.500" href="#" className="chakraLink">
                    Forgot your password?
                  </Link>
                </Box>
              </Stack>
              <div>
                <Button
                  variantColor={VARIANT_COLOR}
                  width="full"
                  mt={4}
                  className="log-in btn"
                  type="submit"
                  name="submit"
                  value="Log In"
                >
                  Log In
                </Button>
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
              this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
            }}
          >
            Register
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

export default connect(mapStateToProps)(Login);

// test
