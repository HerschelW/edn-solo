import React, { Component } from "react";
import { connect } from "react-redux";

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
      <div className="content input-form">
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register New Account</h1>
          <div>
            <label htmlFor="firstName">
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleInputChangeFor("firstName")}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChangeFor("lastName")}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChangeFor("email")}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
              />
            </label>
          </div>
          <div>
            <input
              className="register btn"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <p>or</p>
        <button
          type="button"
          className="link-button btn"
          onClick={() => {
            this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
          }}
        >
          Login
        </button>
      </div>
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
